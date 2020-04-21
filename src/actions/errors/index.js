import {
  REGISTER_ERROR,
  LOGIN_ERROR,
  FETCH_USER_ERROR,
  CLEAR_REGISTER_ERROR,
  CLEAR_LOGIN_ERROR,
  FETCH_USER_LISTS_ERROR,
} from './type'

export const registerError = payload => ({
  type: REGISTER_ERROR,
  payload,
})

export const clearRegisterError = () => ({
  type: CLEAR_REGISTER_ERROR,
})

export const clearLoginError = () => ({
  type: CLEAR_LOGIN_ERROR,
})

export const fetchUserError = payload => ({
  type: FETCH_USER_ERROR,
  payload,
})

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
})

export const fetchUserListsError = payload => ({
  type: FETCH_USER_LISTS_ERROR,
  payload,
})
