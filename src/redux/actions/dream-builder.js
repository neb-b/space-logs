import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'

import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_DREAM,
  UPDATE_DREAM_OPTIONS,
  POPULATE_DREAM_BUILDER,
  TOGGLE_EDIT_DATE,
  UPDATE_DREAM_DATE,
} from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
export const updateDreamText = createAction(UPDATE_DREAM_TEXT)
export const cancelDream = createAction(CANCEL_DREAM)
export const updateDreamOptions = createAction(UPDATE_DREAM_OPTIONS)
export const populateDreamBuilder = createAction(POPULATE_DREAM_BUILDER)
export const toggleEditDate = createAction(TOGGLE_EDIT_DATE)
export const updateDreamDate = createAction(UPDATE_DREAM_DATE)

const onSaveDream = createAction(SAVE_DREAM)

export const saveDream = updatedDream => {
  return (dispatch, getState) => {
    // if the dream doesn't have an id, it is a new dream
    let newDream = updatedDream
    if (!updatedDream.id) {
      newDream.id = uuid()
    }
    if (!updatedDream.dreamDate) {
      updatedDream.dreamDate = new Date()
    }

    return dispatch(onSaveDream(newDream))
  }
}
