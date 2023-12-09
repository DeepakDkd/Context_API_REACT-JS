import React, { useContext} from 'react'
import UserContext from '../context/UserContext'
import Login from './Login'

function Profile() {

    const {user} = useContext(UserContext)
   

  return (
    <div>
        <h1>{user ?`Welcome to Profile ${user.username}`:"Please login"}</h1>
        {!user ? <Login/>:<h2>Login successful..</h2>}
    </div>
  )
}

export default Profile