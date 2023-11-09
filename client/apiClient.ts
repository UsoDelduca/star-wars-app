import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const apiURL = 'https://swapi.dev/api'

export function getSwapi(): Promise<Welcome> {
  return request.get(`${apiURL}/welcome`).then((response) => response.body)
}
