import axios from 'axios'
import { Observable } from 'rxjs'
/**
 * API instance
 */
export const api = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 20000,
})

// Custom instance defaults
api.defaults.headers.post['Content-Type'] = 'application/json'

export function apiObservable(options) {
  return new Observable(async (subscriber) => {
    try {
      const result = await api(options)

      subscriber.next(result)
      subscriber.complete()
    } catch (error) {
      if (error.response) {
        subscriber.error(error.response.data.error)
      } else {
        subscriber.error(error)
      }
    }
  })
}
