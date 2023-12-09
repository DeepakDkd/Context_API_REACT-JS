import React, { useContext} from 'react'
import UserContext from '../context/UserContext'
import Login from './Login'

function Profile() {

    const {user} = useContext(UserContext)
   

  return (
    <div>
        <h1>{user ?`Welcome to Profile ${user.username}`:<Login/>}</h1>
    </div>
  )
}

export default Profile