import { handleActions } from 'redux-actions'
import {
  POPULATE_VIEW_DREAM,
  SAVE_DREAM,
  CONFIRM_DELETE_DREAM,
  CANCEL_DELETE_DREAM,
  DELETE_DREAM,
} from '../constants'

const initialState = {
  text: '',
  dreamOptions: {
    wasLucid: false,
    wasNightmare: false,
    wasRecurrent: false,
  },
  confirmDelete: false,
}

export default handleActions(
  {
    [POPULATE_VIEW_DREAM]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [SAVE_DREAM]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [CONFIRM_DELETE_DREAM]: (state, { payload }) => {
      return {
        ...state,
        confirmDelete: true,
      }
    },
    [DELETE_DREAM]: (state, { payload }) => {
      return {
        ...initialState,
      }
    },
    [CANCEL_DELETE_DREAM]: (state, { payload }) => {
      return {
        ...state,
        confirmDelete: false,
      }
    },
  },
  initialState
)
