import { handleActions } from 'redux-actions'
import {
  POPULATE_VIEW_DREAM,
  SAVE_DREAM,
  TOGGLE_CONFIRM_DELETE,
  DELETE_DREAM,
} from '../constants'

const initialState = {
  text: '',
  dreamDate: null,
  dreamOptions: {
    wasLucid: false,
    wasNightmare: false,
    wasRecurrent: false,
  },
  showDeleteModal: false,
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
    [TOGGLE_CONFIRM_DELETE]: (state, { payload }) => {
      return {
        ...state,
        showDeleteModal: !state.showDeleteModal,
      }
    },
    [DELETE_DREAM]: (state, { payload }) => {
      return {
        ...initialState,
      }
    },
  },
  initialState
)
