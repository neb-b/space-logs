import { handleActions } from 'redux-actions'
import { SAVE_DREAM } from '../constants'

const initialState = {
  dreams: [],
}

export default handleActions(
  {
    // dream will be added to dreams reducer
    // clear out dream info for next addition
    [SAVE_DREAM]: (state, { payload }) => ({
      ...state,
      dreams: state.dreams.concat(payload),
    }),
  },
  initialState
)
