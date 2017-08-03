import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
} from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
export const updateDreamText = createAction(UPDATE_DREAM_TEXT)

const onSaveDream = createAction(SAVE_DREAM)
console.log('ONSAVEDREAM', onSaveDream())

export const saveDream = () => {
  console.log('saving dream')
  return (dispatch, getState) => {
    console.log('inside????')
    const state = getState()
    console.log('state', state)
    return dispatch(onSaveDream({}))
  }
}
