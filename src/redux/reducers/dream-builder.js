import { handleActions } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_CREATE_DREAM,
  UPDATE_DREAM_OPTIONS,
  PREPARE_DREAM_BUILDER,
} from '../constants'

const initialState = {
  isEditingDreamText: true,
  text: '',
  dreamOptions: {
    wasLucid: false,
  },
}

export default handleActions(
  {
    [TOGGLE_EDIT_DREAM_TEXT]: state => ({
      ...state,
      isEditingDreamText: !state.isEditingDreamText,
    }),
    [UPDATE_DREAM_TEXT]: (state, { payload }) => ({
      ...state,
      text: payload,
    }),
    [UPDATE_DREAM_OPTIONS]: (state, { payload }) => ({
      ...state,
      dreamOptions: Object.assign({}, state.dreamOptions, payload),
    }),
    // dream will be added to dreams reducer
    // clear out dream info for next addition
    [SAVE_DREAM]: () => ({
      isEditingDreamText: true,
      text: '',
    }),

    [CANCEL_CREATE_DREAM]: () => ({
      isEditingDreamText: true,
      text: '',
    }),
    [PREPARE_DREAM_BUILDER]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
)
