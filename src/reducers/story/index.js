import {SET_CURRENT_PHOTO, CLEAR_CURRENT_PHOTO} from 'src/actions/story/type'

export default (state, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_PHOTO:
      return {
        ...state,
        photo: payload,
      }

    case CLEAR_CURRENT_PHOTO:
      return {
        ...state,
        photo: null,
      }

    default:
      return state
  }
}
