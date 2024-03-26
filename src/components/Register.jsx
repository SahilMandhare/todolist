import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from './Error'

const Register = () => {

    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const inputHandler = (e) => {

        setUserData({...userData, [e.target.id] : e.target.value})
    }

    const submitHandler = (e) => {

        e.preventDefault();

        if (userData.password === userData.repassword){

            navigate("/login")
            localStorage.setItem("email",userData.email)
            localStorage.setItem("name",userData.name)
            localStorage.setItem("contact",userData.contact)
            localStorage.setItem("password",userData.password)
        } 
        setError("Password Not Match")
    }
    
  return (
    <>
    {error && <Error error={error}/>}
    <div className='page'>
        <h1>Registeration</h1>
        <form onSubmit={submitHandler} className='page-in'>
            <input id='email' placeholder='Email' type="email" onChange={inputHandler} required/>
            <input id='name' placeholder='Name' type="text" onChange={inputHandler} required/>
            <input id='contact' placeholder='Contact No.' type="number" onChange={inputHandler} required/>
            <input id='password' placeholder='Password' type="password" onChange={inputHandler} required/>
            <input id='repassword' placeholder='Re-type Password' type="password" onChange={inputHandler} required/>
            <button>REGISTER</button>
            {error && <div style={{color:"red"}}>{error}</div>}
        </form>
    </div>
    </>
  )
}

export default Register

// xW27tycQ52tVFonS