import {REGISTER_ERROR, CLEAR_REGISTER_ERROR} from 'src/actions/errors/type'

export default (state, {type, payload}) => {
  switch (type) {
    case REGISTER_ERROR:
      return {
        ...state,
        user: payload,
      }
    case CLEAR_REGISTER_ERROR: 
      return {
          ...state,
          user: undefined
      }

    default:
      return state
  }
}
