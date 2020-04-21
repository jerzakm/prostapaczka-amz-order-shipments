import * as fs from 'fs'

export const getLastProcessedEntry = () => {
  fs.existsSync('lastentry') ? console.log('reading last processed entry') : () => {
    console.error('unable to read progress file, starting from 0')
    saveLastProcessedEntry(0)
  }
  const data = fs.readFileSync('lastentry.txt')
  return parseInt(data.toString(), 10)
}

export const saveLastProcessedEntry = (id: number) => {
  fs.writeFileSync('lastentry.txt', `${id}`)
}