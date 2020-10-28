import 'rxjs'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import {createWrapper} from 'next-redux-wrapper'

import rootEpics from './root/epics'
import rootReducers from './root/reducers'

function makeStore() {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })

  const middlewares = process.env.NODE_ENV !== 'production'
    ? [epicMiddleware, logger]
    : [epicMiddleware]

  const store = createStore(
    rootReducers,
    {},
    applyMiddleware(...middlewares),
  )

  epicMiddleware.run(rootEpics)

  return store
}

export const wrapper = createWrapper(makeStore, {debug: true})