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
  authentication: {
    userId: '',
    firstName: '',
    lastName: '',
    isAuthen: false,
    imgUrl: '',
  },
  errors: {
    user: undefined,
  },
}

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const useSelector = callback => {
    return callback(state)
  }

  const middlewareDispatch = useMemo(() => applyMiddleware({dispatch, state}), [
    state.authentication,
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
