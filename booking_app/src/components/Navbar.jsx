import React from 'react'
import "../../src/css/homestyle.css"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate();

  const user=JSON.parse(localStorage.getItem("logInUser"));
  const handleLogout=()=>{
    localStorage.removeItem("logInUser");
    navigate("/");
  };
  
  return (
    <div className='navbar'>
        <nav className='nav'>
          <div className='logo'>
          <img src="src\img\logo.jpg" alt="pic3" /><Link to={"/"} className='fig'>Chic inn</Link></div>
          <ul>
            <Link to={"/service"}><li className='navlink'>Services</li></Link>
            <Link to={"/about"}><li className='navlink'>About</li></Link>
             <Link to={"/contact"}><li className='navlink'>Contact</li></Link>
             {user ? (
              <>
              <span className='sp'>Welcome, {user.name}</span>
              <button onClick={handleLogout} className='bttn'>Sign Out</button>
              </>):(
            <Link to={"/signIn"}><li className='navlink'>Sign In</li></Link>
            )}
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
