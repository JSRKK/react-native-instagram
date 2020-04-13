import {REGISTER_SUCCESS, FETCH_USER_SUCCESS, LOGOUT_SUCCESS} from 'src/actions/user/type'

export default (state, {type, payload}) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return state

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthen: true
      }
    
    case LOGOUT_SUCCESS: 
      return {
          isAuthen: false,
          userId: null,
          email: null,
          firstName: null,
          lastName: null,
          photoURL: null
      }
    default:
      return state
  }
}
