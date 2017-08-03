import { combineReducers } from 'redux'
import nav from './nav'
import dreamBuilder from './dream-builder'
import dreams from './dreams'

export default combineReducers({
  nav,
  dreamBuilder,
  dreams,
})
