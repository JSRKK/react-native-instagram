import {SET_CURRENT_PHOTO, CLEAR_CURRENT_PHOTO} from './type'

export const setCurrentPhoto = payload => ({
  type: SET_CURRENT_PHOTO,
  payload,
})

export const clearCurrentPhoto = () => ({
  type: CLEAR_CURRENT_PHOTO,
})
