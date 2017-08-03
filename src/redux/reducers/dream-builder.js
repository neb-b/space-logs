import { handleActions } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
} from '../constants'

const initialState = {
  isEditingDreamText: true,
  dreamText: '',
}

export default handleActions(
  {
    [TOGGLE_EDIT_DREAM_TEXT]: state => ({
      ...state,
      isEditingDreamText: !state.isEditingDreamText,
    }),
    [UPDATE_DREAM_TEXT]: (state, { payload }) => ({
      ...state,
      dreamText: payload,
    }),
    // dream will be added to dreams reducer
    // clear out dream info for next addition
    [SAVE_DREAM]: state => ({
      dreamText: '',
    }),
  },
  initialState
)
