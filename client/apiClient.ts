import request from 'superagent'

const apiURL = 'https://swapi.dev/api/people'

export async function getSwapi(): Promise<string[]> {
  const response = await request.get(apiURL)
  return response.body
}
