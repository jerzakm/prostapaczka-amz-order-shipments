import * as envLoad from 'dotenv'
import * as Firebird from 'node-firebird'
import { isAmazonOrder, formatDate } from './entryParsing'

export const getDbCredentials = () => {
  envLoad.config()
  const host = process.env.DBHOST
  const port = process.env.DBPORT
  const database = process.env.DBPATH
  const user = process.env.DBUSER
  const password = process.env.DBPASS

  host && port && database && user && password ? console.log(`Db credentials loaded from .env file`) : console.error(`Can't read db credentials from .env file!`)

  return { host, port, database, user, password }
}

export const queryPackages = async ({ host, port, database, user, password }, startingId = 66000) => {
  const options = { host, port, database, user, password, lowercase_keys: false, role: null, pageSize: 4096 }

  const sqlQuery = `SELECT ID, NUMER_LP, NUMER_PMS, OPIS_ZAWARTOSCI, UWAGI, DATA_EKSPORTU, LI_PACZEK, WAGA_PACZEK, ODBIORCA_NAZWA_KRAJU, NAZWA_KONTA
  FROM LIST
  WHERE ID>${startingId}
  ;`

  return new Promise((resolve, reject) => {
    const parsedResults: SentPackage[] = []
    let lastId = 0
    Firebird.attach(options, function (err, db) {

      if (err) {
        reject(err)
      }
      console.log('starting db query..')

      db.query(sqlQuery, function (err, result) {
        for (const entry of result) {
          const order = isAmazonOrder(`${entry.OPIS_ZAWARTOSCI} ${entry.UWAGI}`)
          if (order.matched) {
            if (parseInt(entry.ID, 10) > lastId) {
              lastId = parseInt(entry.ID, 10)
              console.log(lastId)
            }
            parsedResults.push({
              amazonOrder: order.orderId,
              trackingId: entry.NUMER_LP,
              carrier: entry.NAZWA_KONTA,
              date: formatDate(new Date(entry.DATA_EKSPORTU).toISOString())
            })
          }
        }
        db.detach();
        resolve({ parsedResults, lastId })
      });

    });
  });
}


export interface SentPackage {
  amazonOrder: String
  trackingId: String
  carrier: String
  date: String
}