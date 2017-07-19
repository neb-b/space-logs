// @flow

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './redux/reducers'

const middleware = () => (__DEV__ ? applyMiddleware(logger) : null)

const store = createStore(reducer, middleware())

export default store
