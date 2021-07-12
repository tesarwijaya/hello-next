import createReducer from '../../../libs/reducer'
import State from './state'
import type {InitialState} from './state'

export const MOVIE_SEARCH = 'MOVIE_SEARCH'
export const MOVIE_SEARCH_FAILED = 'MOVIE_SEARCH_FAILED'
export const MOVIE_SEARCH_SUCCESS = 'MOVIE_SEARCH_SUCCESS'
export const MOVIE_SEARCH_FORM = 'MOVIE_SEARCH_FORM'

export const MOVIE_SEARCH_FAVORITE_ADD = 'MOVIE_SEARCH_FAVORITE_ADD'
export const MOVIE_SEARCH_FAVORITE_REMOVE = 'MOVIE_SEARCH_FAVORITE_REMOVE'

export const MOVIE_SEARCH_DETAIL = 'MOVIE_SEARCH_DETAIL'
export const MOVIE_SEARCH_DETAIL_FAILED = 'MOVIE_SEARCH_DETAIL_FAILED'
export const MOVIE_SEARCH_DETAIL_MODAL = 'MOVIE_SEARCH_DETAIL_MODAL'
export const MOVIE_SEARCH_DETAIL_SUCCESS = 'MOVIE_SEARCH_DETAIL_SUCCESS'

const Movie = {
  [MOVIE_SEARCH]: (state: InitialState): InitialState => ({
    ...state,
    search: {
      ...state.search,
      isLoading: true,
    },
  }),
  [MOVIE_SEARCH_FAILED]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    search: {
      ...state.search,
      isLoading: false,
      error: {
        message: payload.error.message,
      },
    },
  }),
  [MOVIE_SEARCH_SUCCESS]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    search: {
      ...state.search,
      isLoading: false,
      isBuilt: true,
      data: payload.data,
    },
  }),
  [MOVIE_SEARCH_FORM]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    search: {
      ...state.search,
      form: {
        ...state.search.form,
        [payload.meta]: payload.data,
      },
    },
  }),

  [MOVIE_SEARCH_FAVORITE_ADD]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    favorites: [
      ...state.favorites,
      payload.data,
    ],
  }),

  [MOVIE_SEARCH_FAVORITE_REMOVE]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    favorites: state.favorites.filter((i) => i !== payload.data),
  }),

  [MOVIE_SEARCH_DETAIL]: (state: InitialState): InitialState => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: true,
    },
  }),
  [MOVIE_SEARCH_DETAIL_FAILED]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: false,
      error: {
        message: payload.error.message,
      },
    },
  }),
  [MOVIE_SEARCH_DETAIL_MODAL]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    detail: {
      ...state.detail,
      modal: payload.data,
    },
  }),
  [MOVIE_SEARCH_DETAIL_SUCCESS]: (state: InitialState, { payload }): InitialState => ({
    ...state,
    detail: {
      ...state.detail,
      isLoading: false,
      data: payload.data,
    },
  }),
}

export default createReducer(Movie, State)
