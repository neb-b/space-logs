import { handleActions } from 'redux-actions'
import { SAVE_DREAM, DELETE_DREAM } from '../constants'

const initialState = {
  dreams: [],
}

export default handleActions(
  {
    [SAVE_DREAM]: (state, { payload }) => {
      let newSavedDreams = state.dreams.slice() || []
      const alreadyExists = newSavedDreams.some(
        dream => dream.id === payload.id
      )

      if (alreadyExists) {
        newSavedDreams = newSavedDreams.map(dream => {
          if (dream.id === payload.id) {
            return payload
          }
        })
      } else {
        newSavedDreams.unshift(payload)
      }

      return {
        ...state,
        dreams: newSavedDreams,
      }
    },
    [DELETE_DREAM]: (state, { payload: dreamId }) => {
      return {
        ...state,
        dreams: state.dreams.filter(dream => dream.id !== dreamId),
      }
    },
  },
  initialState
)
