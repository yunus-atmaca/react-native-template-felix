import * as Types from './Types'

export const login = (user) => ({
  type: Types.LOGIN,
  payload: {
    user: user
  }
})