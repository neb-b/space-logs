import { createAction } from 'redux-actions'
import { FIRST_AUTH } from '../constants'

export const onFirstOpen = createAction(FIRST_AUTH)
