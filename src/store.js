// @flow

import { AsyncStorage } from 'react-native'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'
import reducer from './redux/reducers'

const middleware = () => (__DEV__ ? applyMiddleware(logger) : null)

const store = createStore(
  reducer,
  undefined,
  compose(middleware(), __DEV__ ? autoRehydrate() : null)
)

if (__DEV__) {
  persistStore(store, { storage: AsyncStorage })
}

export default store
