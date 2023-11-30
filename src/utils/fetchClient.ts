const applicationId = process.env.APPLICATION_ID
const accessKey = process.env.ACCESS_KEY
const secretKey = process.env.SECRET_KEY
const baseUrl = process.env.BASE_UR

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

async function request<T>(
  query: string,
  method: RequestMethod = 'GET',
  data: any = null
): Promise<T> {
  const options: RequestInit = { method }
  options.headers = {
    'Accept-Version': 'v1',
  }

  if (data) {
    options.body = JSON.stringify(data)
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }

  const URL = `${baseUrl + query}client_id=${accessKey}`

  try {
    const response = await fetch(URL, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const responseData: T = await response.json()

    return responseData
  } catch (err) {
    throw err
  }
}

export const client = {
  get: <T>(query: string) => request<T>(query),
}
