import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { diff } from 'jsondiffpatch'

import Movie from '../../constructors/Movie/ducks/reducer'

const appReducers = combineReducers({
  Movie,
})

const rootReducers = (state, action) => {
  const stateDiff = diff(state, action.payload)
  const wasBumpedOnClient = stateDiff?.page && stateDiff.page[0].endsWith('X')

  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page,
        // keep existing state or use hydrated
      }

    case 'TICK':
      return { ...state, tick: action.payload }

    default:
      return appReducers(state, action)
  }
}

export default rootReducers
