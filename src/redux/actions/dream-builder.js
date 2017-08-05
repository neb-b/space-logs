import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'

import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_CREATE_DREAM,
  UPDATE_DREAM_OPTIONS,
  POPULATE_DREAM_BUILDER,
} from '../constants'

export const toggleDreamEditText = createAction(TOGGLE_EDIT_DREAM_TEXT)
export const updateDreamText = createAction(UPDATE_DREAM_TEXT)
export const cancelCreateDream = createAction(CANCEL_CREATE_DREAM)
export const updateDreamOptions = createAction(UPDATE_DREAM_OPTIONS)
export const populateDreamBuilder = createAction(POPULATE_DREAM_BUILDER)

const onSaveDream = createAction(SAVE_DREAM)
export const saveDream = () => {
  return (dispatch, getState) => {
    let dream = getState().dreamBuilder

    // no id, new dream
    // if it has an id, this is an update
    if (!dream.id) {
      dream = Object.assign({}, dream, {
        id: uuid(),
        dateCreated: new Date().toISOString(),
      })
    }

    // not sure about this
    console.log('save', dream)
    delete dream.isEditingDreamText

    return dispatch(onSaveDream(dream))
  }
}
