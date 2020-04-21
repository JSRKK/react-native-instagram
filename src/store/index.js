import React, {useReducer, useMemo} from 'react'
import _ from 'lodash'

import applyMiddleware from 'src/store-middleware'
import {StateContext, DispatchContext} from 'src/context'
import reducers from 'src/reducers'

const reducer = (state, action) => {
  const newState = {}

  _.keys(reducers).map(key => {
    newState[key] = reducers[key](state[key], action)
  })

  return newState
}

const initialState = {
  user: {
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    isAuthen: false,
    photoURL: null,
  },
  errors: {
    user: null,
  },
  story: {
    photo: null
  },
  search: {
    userLists: []
  }
}

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const useSelector = callback => {
    return callback(state)
  }

  const middlewareDispatch = useMemo(() => applyMiddleware({dispatch, state}), [
    state.user.isAuthen,
  ])

  return (
    <StateContext.Provider value={useSelector}>
      <DispatchContext.Provider value={middlewareDispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default StoreProvider
