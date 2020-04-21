import { getDbCredentials, queryPackages } from "./firebirdDb"
import { isAmazonOrder, formatDate } from "./entryParsing"
import { getLastProcessedEntry } from "./progressPersistence"

function t() {
  // 1. Get DB credentials
  const credentials = getDbCredentials()
  // 2. Get progress
  const progress = getLastProcessedEntry()
  // 3. Query for packages
  const packages = queryPackages(credentials, progress)
  // 4. Parse packages to find valid amazon orders and return them

  // 5. Make an Amazon upload file according to the template

  // 6. Upload to Baselinker
  // 7. Upload to Amz

}

// t()