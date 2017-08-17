import { createAction } from 'redux-actions'
import {
  POPULATE_VIEW_DREAM,
  DELETE_DREAM,
  CONFIRM_DELETE_DREAM,
  CANCEL_DELETE_DREAM,
} from '../constants'

export const populateViewDream = createAction(POPULATE_VIEW_DREAM)
export const confirmDeleteDream = createAction(CONFIRM_DELETE_DREAM)
export const cancelDeleteDream = createAction(CANCEL_DELETE_DREAM)
export const deleteDream = createAction(DELETE_DREAM)
