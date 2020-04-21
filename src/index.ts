import { getDbCredentials, queryPackages } from "./firebirdDb"
import { isAmazonOrder } from "./entryParsing"

function t() {
  const credentials = getDbCredentials()
  // queryPackages(credentials)
  isAmazonOrder(`'17734/2020; Amazon 206-8562183-9433933 Ms Samantha May Ferrier',`)
}

t()