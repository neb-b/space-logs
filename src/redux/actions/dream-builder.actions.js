import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import { TOGGLE_EDIT_DREAM_TEXT } from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
