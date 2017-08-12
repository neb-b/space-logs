import { handleActions } from 'redux-actions'
import { SAVE_DREAM, DELETE_DREAM } from '../constants'

const initialState = {
  dreams: [],
}

export default handleActions(
  {
    [SAVE_DREAM]: (state, { payload }) => {
      let dreams = []
      const alreadyExists = state.dreams.some(dream => dream.id === payload.id)

      if (alreadyExists) {
        dreams = state.dreams.map(dream => {
          if (dream.id === payload.id) {
            return payload
          }
        })
      } else {
        dreams = state.dreams.concat(payload)
      }

      return {
        ...state,
        dreams,
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
