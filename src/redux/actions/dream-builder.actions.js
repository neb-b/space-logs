import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_CREATE_DREAM,
} from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
export const updateDreamText = createAction(UPDATE_DREAM_TEXT)
export const cancelCreateDream = createAction(CANCEL_CREATE_DREAM)

const onSaveDream = createAction(SAVE_DREAM)
export const saveDream = () => {
  return (dispatch, getState) => {
    const { text } = getState().dreamBuilder
    return dispatch(onSaveDream({ text }))
  }
}
