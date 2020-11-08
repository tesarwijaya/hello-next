import { combineEpics } from 'redux-observable'

import * as MovieEpics from '../../constructors/Movie/ducks/observables'
import * as PeopleEpics from '../../constructors/People/ducks/observables'

function rootEpics(...args) {
  const dependencies = {}
  const allEpics = [
    ...Object.values(MovieEpics),
    ...Object.values(PeopleEpics),
  ]

  return combineEpics(...allEpics)(...args, dependencies)
}

export default rootEpics
