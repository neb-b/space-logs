import { handleActions } from 'redux-actions'
import { FIRST_LOGIN } from '../constants'

const initialState = {}

export default handleActions(
  {
    'persist/REHYDRATE': (state, { payload }) => ({
      ...state,
      loaded: true,
    }),
  },
  initialState
)
