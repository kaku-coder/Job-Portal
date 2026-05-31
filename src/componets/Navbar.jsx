import React, { useContext, useState } from 'react'
import './Navbar.css'
import employ from '../assets/employee.png'
import { Sun,Moon } from 'lucide-react';
import { userContext } from '../context/TheamButton';
import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {darkMode,toggleTheme} = useContext(userContext);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();
  const toggleLogin = () => {
    setLogin(true);
    setSignup(false);
    navigate('/login');
  } 
  const toggleSignup = () => {
    setSignup(true);
    setLogin(false);
    navigate('/signup');
  }
  console.log(darkMode,toggleTheme);

  return (
    <nav className='navbar'>
      <div className="left_nav">
        <h1> <img src={employ} alt="" />JobHob</h1>
      </div>
      <div className="middle_nav">
        <a href="#">Browse Jobs</a>
        <a href="#">Saved Jobs</a>
        <a href="#">Dashboard</a>
        <a href="#">About</a>
      </div>
      <div className="right_nav">
       <button className={`theme-toggle-btn ${darkMode ? 'dark_mode' : ''}`} onClick={toggleTheme}>
        {darkMode? <Sun /> : <Moon />}
        </button>
        <div className="login">
          {login ? <Login setLogin={setLogin} setSignup={setSignup} /> : <button onClick={toggleLogin}>Login</button>}
          {signup ? <SignUp setSignup={setSignup} /> : <button onClick={toggleSignup}>Sign up</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
