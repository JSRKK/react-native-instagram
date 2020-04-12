import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from './type'

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload,
})

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
})

export const fetchUserRequest = payload => ({
  type: FETCH_USER_REQUEST,
  payload,
})

export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
})
