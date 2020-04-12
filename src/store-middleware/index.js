import {REGISTER_REQUEST} from 'src/actions/user/type'

import registerRequest from './user/registerRequest'

const applyMiddleware = store => action => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return registerRequest(store, action)

    default:
      return store.dispatch(action)
  }
}

export default applyMiddleware
