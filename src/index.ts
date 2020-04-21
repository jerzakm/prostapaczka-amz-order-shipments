import { getDbCredentials, queryPackages } from "./firebirdDb"
import { isAmazonOrder, formatDate, packageArrayToFile } from "./entryParsing"
import { getLastProcessedEntry, saveLastProcessedEntry } from "./progressPersistence"

import * as fs from 'fs'

async function t() {
  // 1. Get DB credentials
  const credentials = getDbCredentials()
  // 2. Get progress
  const progress = getLastProcessedEntry()
  // 3. Query for packages
  // 4. Parse packages to find valid amazon orders and return them          TODO => separate step
  const packages: any = await queryPackages(credentials, progress)
  // 5. Make an Amazon upload file according to the template
  const tabString = packageArrayToFile(packages.parsedResults)

  fs.writeFileSync(`output/${formatDate(new Date().toISOString())}.txt`, tabString)
  // 6. Upload to Baselinker
  saveLastProcessedEntry(packages.lastId)
  // 7. Upload to Amz

}

t()