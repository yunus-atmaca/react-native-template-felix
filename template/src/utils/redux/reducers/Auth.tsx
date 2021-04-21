import { Types } from '../actions'

const initialState = {
  user: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN: {
      const { user } = action.payload

      return {
        ...state,
        user: user
      }
    }
    default:
      return state;
  }
}