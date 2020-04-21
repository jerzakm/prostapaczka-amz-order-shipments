export const isAmazonOrder = (string: string) => {
  const matched = string.match(/[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)

  return {
    matched: matched ? true : false,
    orderId: matched ? matched[0] : null
  }
}