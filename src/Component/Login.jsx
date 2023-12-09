import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div className='login'>
        <h1>Login here...</h1>
        <input type='text'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter username' />
        <input type='text'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'/>
        <input type="submit" 
                onClick={handleSubmit}/>
    </div>
  )
}

export default Login