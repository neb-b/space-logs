import { combineReducers } from 'redux'
import nav from './nav'
import dreamBuilder from './dream-builder'
import dreams from './dreams'
import dream from './dream'
import settings from './settings'
import auth from './auth'

export default combineReducers({
  nav,
  dreamBuilder,
  dreams,
  dream,
  settings,
  auth,
})
