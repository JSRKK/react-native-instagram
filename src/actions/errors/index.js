import {REGISTER_ERROR, FETCH_USER_ERROR, CLEAR_REGISTER_ERROR} from './type'

export const registerError = payload => ({
  type: REGISTER_ERROR,
  payload,
})

export const clearRegisterError = () => ({
    type: CLEAR_REGISTER_ERROR
})

export const fetchUserError = payload => ({
  type: FETCH_USER_ERROR,
  payload,
})
