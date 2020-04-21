import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST
} from 'src/actions/user/type'

import {FETCH_USER_LISTS_REQUEST} from 'src/actions/search/type'

import registerRequest from './user/registerRequest'
import loginRequest from './user/loginRequest'
import logoutRequest from './user/logoutRequest'

import ferchUserListRequest from './search/fetchUserListsRequest'

const applyMiddleware = store => action => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return registerRequest(store, action)

    case LOGIN_REQUEST:
      return loginRequest(store, action)

    case LOGOUT_REQUEST:
      return logoutRequest(store, action)

    case FETCH_USER_LISTS_REQUEST:
      return ferchUserListRequest(store, action)
    default:
      return store.dispatch(action)
  }
}

export default applyMiddleware
