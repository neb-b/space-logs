import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_CREATE_DREAM,
  UPDATE_DREAM_OPTIONS,
} from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
export const updateDreamText = createAction(UPDATE_DREAM_TEXT)
export const cancelCreateDream = createAction(CANCEL_CREATE_DREAM)
export const updateDreamOptions = createAction(UPDATE_DREAM_OPTIONS)

const onSaveDream = createAction(SAVE_DREAM)
export const saveDream = () => {
  return (dispatch, getState) => {
    const dream = getState().dreamBuilder
    return dispatch(onSaveDream(dream))
  }
}
