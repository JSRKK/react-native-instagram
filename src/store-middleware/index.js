import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from 'src/actions/user/type'

import registerRequest from './user/registerRequest'
import loginRequest from './user/loginRequest'
import logoutRequest from './user/logoutRequest'

const applyMiddleware = store => action => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return registerRequest(store, action)

    case LOGIN_REQUEST:
      return loginRequest(store, action)

    case LOGOUT_REQUEST:
      return logoutRequest(store, action)

    default:
      return store.dispatch(action)
  }
}

export default applyMiddleware
