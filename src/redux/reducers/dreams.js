import { handleActions } from 'redux-actions'
import { SAVE_DREAM } from '../constants'

const initialState = {
  dreams: [],
}

export default handleActions(
  {
    // dream will be added to dreams reducer
    // clear out dream info for next addition
    [SAVE_DREAM]: (state, { payload }) => {
      const alreadyExists = state.dreams.some(dream => {
        console.log('check', dream.id, payload.id)
        return dream.id === payload.id
      })
      let newDreamsList = []
      console.log('alreadyExists', alreadyExists)
      if (alreadyExists) {
        newDreamsList = state.dreams.map(dream => {
          if (dream.id === payload.id) {
            return payload
          }
        })
      } else {
        newDreamsList = state.dreams.concat(payload)
      }

      return {
        ...state,
        dreams: newDreamsList,
      }
    },
  },
  initialState
)
