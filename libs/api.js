import axios from 'axios'
import { Observable } from 'rxjs'
/**
 * API instance
 */
const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  timeout: 20000,
})

// Custom instance defaults
api.defaults.headers.post['Content-Type'] = 'application/json'

export function apiObservable(options) {
  return new Observable(async (subscriber) => {
    try {
      const {
        method = 'get', url,
      } = options
      const result = await api({
        method,
        url,
      })

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
  