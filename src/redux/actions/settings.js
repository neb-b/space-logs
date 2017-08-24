import { createAction } from 'redux-actions'
import { FIRST_LOGIN } from '../constants'

export const onFirstOpen = createAction(FIRST_LOGIN)
