import {FETCH_USER_LISTS_REQUEST, FETCH_USER_LISTS_SUCCESS, CLEAR_USER_LISTS} from './type'

export const fetchUserListsRequest = payload => ({
  type: FETCH_USER_LISTS_REQUEST,
  payload,
})

export const fetchUserListsSuccess = payload => ({
  type: FETCH_USER_LISTS_SUCCESS,
  payload,
})

export const clearUserLists = () => ({
    type: CLEAR_USER_LISTS
})