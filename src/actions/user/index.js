import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './type'

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload,
})

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
})

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
})

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const fetchUserRequest = payload => ({
  type: FETCH_USER_REQUEST,
  payload,
})

export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
})
