import { handleActions } from 'redux-actions'
import { POPULATE_VIEW_DREAM, SAVE_DREAM } from '../constants'

const initialState = {
  text: '',
  dreamOptions: {
    wasLucid: false,
  },
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
        ...payload,
      }
    },
  },
  initialState
)
