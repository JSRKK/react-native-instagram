import {LOGIN_REQUEST, LOGIN_SUCCESS} from './type'

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
})

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
})
