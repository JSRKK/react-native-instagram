import {
  REGISTER_ERROR,
  LOGIN_ERROR,
  CLEAR_REGISTER_ERROR,
  CLEAR_LOGIN_ERROR,
} from 'src/actions/errors/type'

export default (state, {type, payload}) => {
  switch (type) {
    case REGISTER_ERROR:
      return {
        ...state,
        user: payload,
      }

    case LOGIN_ERROR:
      return {
        ...state,
        user: payload,
      }

    case CLEAR_REGISTER_ERROR:
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        user: undefined,
      }

    default:
      return state
  }
}
