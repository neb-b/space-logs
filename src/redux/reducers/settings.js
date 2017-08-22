import { handleActions } from 'redux-actions'
import { FIRST_AUTH } from '../constants'

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
