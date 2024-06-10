import React, { useState } from 'react'
import '../../sass/signup.scss'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [username, setUsername] = useState('john32')
    const [password, setPassword] = useState('87654321')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {username, password}
        if (username === 'john32' && password === '87654321') {
            localStorage.setItem('token', JSON.stringify(user))
            navigate('/admin')
        } else {
            navigate('/login')
        }
        
      }

  return (
    <>
    <div className='signup'>
        <form action="" onSubmit={handleSubmit}>
            <p>Login to Admin page</p><br /><br />
            <input type="text" placeholder='Name' value={username} onChange={((e)=> setUsername(e.target.value))}/><br /><br />
            <input type="text" placeholder='Phone number' value={password} onChange={((e)=> setPassword(e.target.value))}/><br /><br /><br />
            <button>Login</button>
        </form>    
    </div>
    </>
  )
}

export default Signup