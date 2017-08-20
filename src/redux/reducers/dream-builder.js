import { handleActions } from 'redux-actions'
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

const initialState = {
  text: '',
  dreamDate: null,
  dreamOptions: {
    wasLucid: false,
    wasNightmare: false,
    wasRecurrent: false,
  },
  showDateModal: false,
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
    [POPULATE_DREAM_BUILDER]: (state, { payload }) => ({
      ...initialState,
      ...payload,
    }),
    [SAVE_DREAM]: (state, { payload }) => ({
      ...state,
      showDateModal: false,
    }),
    [TOGGLE_EDIT_DATE]: (state, { payload }) => ({
      ...state,
      showDateModal: !state.showDateModal,
    }),
    [UPDATE_DREAM_DATE]: (state, { payload }) => {
      console.log('pyal', payload)
      return {
        ...state,
        dreamDate: payload,
        showDateModal: false,
      }
    },
  },
  initialState
)
