import { ofType } from 'redux-observable'
import {
  of,
} from 'rxjs'

import {
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators'

import {
  peopleSuccess,
  peopleFailed,
} from './actions'

import { PEOPLE } from './reducer'

import { apiObservable } from '../../../libs/api'

// eslint-disable-next-line import/prefer-default-export
export function peopleEpic(action$) {
  return action$
    .pipe(
      ofType(PEOPLE),
      mergeMap(({ payload }) => apiObservable({ url: '/people', params: payload.data, method: 'get' })
        .pipe(
          map((response) => peopleSuccess(response.data)),
          catchError((response) => of(
            peopleFailed(response),
          )),
        )),
      catchError((response) => of(peopleFailed(response))),
    )
}
