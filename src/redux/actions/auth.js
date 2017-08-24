import { createAction } from 'redux-actions'
import {
  LOGIN,
  SKIP_PASSCODE,
  TOGGLE_PASSCODE_REQUIRED,
  CREATE_PASSCODE,
} from '../constants'

export const login = createAction(LOGIN)
export const skipPasscode = createAction(SKIP_PASSCODE)
export const togglePassCodeRequired = createAction(TOGGLE_PASSCODE_REQUIRED)
export const createPasscode = createAction(CREATE_PASSCODE)
