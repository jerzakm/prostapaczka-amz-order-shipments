import { SentPackage } from "./firebirdDb"
import { fstat } from "fs"

export const isAmazonOrder = (string: string) => {
  const matched = string.match(/[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)

  return {
    matched: matched ? true : false,
    orderId: matched ? matched[0] : null
  }
}

export const formatDate = (dateString: string) => {
  return `${dateString}`.substring(0, 10)
}

export const packageArrayToFile = (packages: SentPackage[]) => {
  let tabSeparatedString = `order-id\torder-item-id\tquantity\tship-date\tcarrier-code\tcarrier-name\ttracking-number\tship-method\ttransparency_code\n`

  for (const p of packages) {
    tabSeparatedString += `${p.amazonOrder}\t\t\t${p.date}\t${p.carrier}\t${p.carrier}\t${p.trackingId}\t\t\n`
  }
  return tabSeparatedString
}