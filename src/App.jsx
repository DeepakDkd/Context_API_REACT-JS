import React from 'react'
import Profile from './Component/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  
  return (
    
    <UserContextProvider>
      <Profile/>
    </UserContextProvider>
    
  )
}

export default App
