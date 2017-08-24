import { handleActions } from 'redux-actions'
import {
  LOGIN,
  SKIP_PASSCODE,
  TOGGLE_PASSCODE_REQUIRED,
  CREATE_PASSCODE,
} from '../constants'

const initialState = {
  isAuthorized: false,
  isFirstOpen: true,
  passCodeRequired: false,
  passCode: null,
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
    [TOGGLE_PASSCODE_REQUIRED]: state => {
      const newPassCodeRequired = !state.passCodeRequired
      console.log('toggling')
      return {
        ...state,
        passCodeRequired: newPassCodeRequired,
        // delete passCode if passCodeRequired is false, I will probably break this out
        passCode: newPassCodeRequired ? state.passCode : null,
      }
    },
    [CREATE_PASSCODE]: (state, { payload }) => ({
      ...state,
      passCode: payload,
      isAuthorized: true,
    }),
    [LOGIN]: (state, { payload }) => ({
      ...state,
      isAuthorized: state.passCode === payload,
    }),
  },
  initialState
)
