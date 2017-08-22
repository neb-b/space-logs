import { handleActions } from 'redux-actions'
import { AUTH, SKIP_PASSCODE } from '../constants'

const initialState = {
  isAuthorized: false,
  isFirstOpen: true,
  passcodeRequired: false,
  hasPasscode: false,
}

export default handleActions(
  {
    'persist/REHYDRATE': (state, { payload }) => ({
      ...state,
      ...payload.auth,
      isAuthorized: false,
    }),

    // only called from initial render splash setup
    // choosing to create a passcode, or skip and not require auth
    [SKIP_PASSCODE]: (state, { payload }) => {
      return {
        ...state,
        isFirstOpen: false,
      }
    },
  },
  initialState
)
