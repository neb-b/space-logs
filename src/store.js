// @flow

import { AsyncStorage } from 'react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

const middleware = () =>
  __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)

const store = createStore(
  reducer,
  undefined,
  compose(middleware(), autoRehydrate())
  // compose(middleware())
)

persistStore(store, { storage: AsyncStorage })

export default store
