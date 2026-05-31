import React from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ setSignup, setLogin }) => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setSignup(false);
    navigate('/');
  }

  const handleGoToLogin = (e) => {
    e.preventDefault();
    setSignup(false);
    setLogin(true);
    navigate('/login');
  }

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <h1>Join JobHub</h1>
        <p>Create your account in minutes</p>
        <div className="signUp-form">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Enter your name' />
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Enter your email' />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter your password' />
            <div className="checkbox">
                <input type="checkbox" id="terms_checkbox" />
                <label htmlFor="terms_checkbox">I agree to the terms and conditions</label>
            </div>
            <button onClick={handleCreateAccount}>Create account</button>
            <p>Already have an account? <a href="#" onClick={handleGoToLogin}>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp