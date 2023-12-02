export function convertCamelCaseToSnakeCase(camelCaseString: string) {
  return camelCaseString.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}
