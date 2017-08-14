import { createAction } from 'redux-actions'
import { POPULATE_VIEW_DREAM, DELETE_DREAM } from '../constants'

export const populateViewDream = createAction(POPULATE_VIEW_DREAM)
export const deleteDream = createAction(DELETE_DREAM)
