import { ofType } from 'redux-observable'
import {
  of,
} from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators'

import {
  movieSearchSuccess,
  movieSearchFailed,

  movieSearchDetailSuccess,
  movieSearchDetailFailed,
} from './actions'

import { MOVIE_SEARCH, MOVIE_SEARCH_DETAIL } from './reducer'

import { apiObservable } from '../../../libs/api'

export function movieSearchEpic(action$, state$) {
  return action$
    .pipe(
      ofType(MOVIE_SEARCH),
      mergeMap(() => apiObservable({url: `?apikey=db686161&s=${state$.value.Movie.search.form.query}`, method: 'get'})
        .pipe(
          map((response) => {
            return movieSearchSuccess(response.data)
          }),
          catchError((response) => of(
            movieSearchFailed(response),
          )),
        )),
      catchError((response) => of(movieSearchFailed(response))),
    )
}

export function movieSearchDetailEpic(action$, state$) {
  return action$
    .pipe(
      ofType(MOVIE_SEARCH_DETAIL),
      mergeMap(() => apiObservable({url: `?apikey=db686161&i=${state$.value.Movie.detail.modal}&plot=full`, method: 'get'})
        .pipe(
          map((response) => movieSearchDetailSuccess(response.data)),
          catchError((response) => of(
            movieSearchDetailFailed(response),
          )),
        )),
      catchError((response) => of(movieSearchDetailFailed(response))),
    )
}
