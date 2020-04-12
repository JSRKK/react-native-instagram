import React from 'react'
import Authentication from 'screens/authentication'
import StoreProvider from 'src/store'

const App = () => {
  return (
    <StoreProvider>
      <Authentication />
    </StoreProvider>
  )
}

export default App
