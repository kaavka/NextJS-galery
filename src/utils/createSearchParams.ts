import { convertCamelCaseToSnakeCase } from '@/utils/convertCamelCaseToSnakeCase'

export function createSearchParams(options: Options) {
  const searchParams = new URLSearchParams()

  for (const key in options) {
    const formattedKey = convertCamelCaseToSnakeCase(key)

    if (options[key]) {
      searchParams.append(formattedKey, String(options[key]))
    }
  }

  return searchParams.toString()
}
