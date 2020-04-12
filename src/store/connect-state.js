import React, { useContext, useMemo } from 'react'
import { StateContext } from 'src/context'

const ConnectState = ({ children, selectors, props = {} }) => {
  const StateSelector = useContext(StateContext)
  const state = {}
  selectors.map(selector => {
    state[selector.name] = StateSelector(state => selector.path(state))
  })
  const renderFactor = [...Object.values(state), ...Object.values(props)]
  return useMemo(() => {
    return React.cloneElement(children, { ...props, ...state })
  }, Object.values(renderFactor))
}

export default ConnectState
