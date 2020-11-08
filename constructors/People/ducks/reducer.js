import createReducer from '../../../libs/reducer'
import State from './state'

export const PEOPLE = 'PEOPLE'
export const PEOPLE_FAILED = 'PEOPLE_FAILED'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'

export const PEOPLE_FAVORITE_ADD = 'PEOPLE_FAVORITE_ADD'
export const PEOPLE_FAVORITE_REMOVE = 'PEOPLE_FAVORITE_REMOVE'

export const PEOPLE_MODAL = 'PEOPLE_MODAL'
export const PEOPLE_MODAL_RESET = 'PEOPLE_MODAL_RESET'

const People = {
  [PEOPLE]: (state) => ({
    ...state,
    people: {
      ...state.people,
      isLoading: true,
    },
  }),
  [PEOPLE_FAILED]: (state, { payload }) => ({
    ...state,
    people: {
      ...state.people,
      isLoading: false,
      error: {
        message: payload.error.message,
      },
    },
  }),
  [PEOPLE_SUCCESS]: (state, { payload }) => ({
    ...state,
    people: {
      ...state.people,
      isLoading: false,
      isBuilt: true,
      data: payload.data,
    },
  }),

  [PEOPLE_MODAL]: (state, { payload }) => ({
    ...state,
    people: {
      ...state.people,
      modal: payload.data,
    },
  }),

  [PEOPLE_FAVORITE_ADD]: (state, { payload }) => ({
    ...state,
    favorites: [
      ...state.favorites,
      payload.data,
    ],
  }),

  [PEOPLE_FAVORITE_REMOVE]: (state, { payload }) => ({
    ...state,
    favorites: state.favorites.filter((i) => i !== payload.data),
  }),
}

export default createReducer(People, State)
