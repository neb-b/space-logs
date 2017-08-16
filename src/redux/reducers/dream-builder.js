import { handleActions } from 'redux-actions'
import {
  TOGGLE_EDIT_DREAM_TEXT,
  UPDATE_DREAM_TEXT,
  SAVE_DREAM,
  CANCEL_DREAM,
  UPDATE_DREAM_OPTIONS,
  POPULATE_DREAM_BUILDER,
} from '../constants'

const initialState = {
  text: '',
  dreamOptions: {
    wasLucid: false,
    wasNightmare: false,
    wasRecurrent: false,
  },
}

export default handleActions(
  {
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
      ...initialState,
    }),

    [CANCEL_DREAM]: () => ({
      ...initialState,
    }),
    [POPULATE_DREAM_BUILDER]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState
)
