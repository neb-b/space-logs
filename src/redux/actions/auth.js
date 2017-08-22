import { createAction } from 'redux-actions'
import { AUTH, SKIP_PASSCODE } from '../constants'

export const onAuth = createAction(AUTH)
export const skipPasscode = createAction(SKIP_PASSCODE)
