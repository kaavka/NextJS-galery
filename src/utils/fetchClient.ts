const applicationId = process.env.APPLICATION_ID
const accessKey = process.env.ACCESS_KEY
const secretKey = process.env.SECRET_KEY
const baseUrl = process.env.BASE_URL

if (!applicationId || !accessKey || !secretKey || !baseUrl) {
  throw new Error('One or more required environment variables are missing.')
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

async function request<T>(
  query: string,
  method: RequestMethod = 'GET',
  data: any = null
): Promise<T> {
  const url = new URL(baseUrl + query)
  url.searchParams.append('client_id', accessKey as string)

  const options: RequestInit = { method }
  options.headers = {
    'Accept-Version': 'v1',
  }

  if (data) {
    options.body = JSON.stringify(data)
    options.headers['Content-Type'] = 'application/json; charset=UTF-8'
  }

  try {
    const response = await fetch(url.toString(), options)

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${response.statusText}`
      )
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
