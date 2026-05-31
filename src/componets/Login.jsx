import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLogin, setSignup }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    setLogin(false);
    navigate('/');
  }
  const handleSignUp = () => {
    setLogin(false);
    setSignup(true);
    navigate('/signup');
  }
  return (
    <div className='login_container'>
      <div className='login_box'>
        <h1>Welcome Back</h1>
        <p>Sign in to your JobHub account</p>
        <div className='login_input'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='Enter your email' />
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enter your password' />
          <button onClick={handleLogin}>Login</button>
        </div>
        <p onClick={handleSignUp}>Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login