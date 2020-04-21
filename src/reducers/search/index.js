import {
  FETCH_USER_LISTS_SUCCESS,
  CLEAR_USER_LISTS
} from 'src/actions/search/type'

export default (state, {type, payload}) => {
  switch (type) {
    case FETCH_USER_LISTS_SUCCESS:
      return {
        ...state,
        userLists: payload
      }

    case CLEAR_USER_LISTS:
      return {
        ...state,
        userLists: []
      }
    default:
      return state
  }
}
