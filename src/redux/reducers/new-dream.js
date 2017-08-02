import { handleActions } from 'redux-actions'
import { TOGGLE_EDIT_DREAM_TEXT } from '../constants'

const initialState = {
  isEditingDreamText: true,
}

export default handleActions(
  {
    [TOGGLE_EDIT_DREAM_TEXT]: (state, action) => ({
      ...state,
      isEditingDreamText: !state.isEditingDreamText,
    }),
  },
  initialState
)
