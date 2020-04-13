import React from 'react'
import StoreProvider from 'src/store'
import AppNavigator from 'src/navigation'

const App = () => {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  )
}

export default App
