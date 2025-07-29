import React from 'react'
import "../../src/css/homestyle.css"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate();
const user = localStorage.getItem("user");

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};
  return (
    <div className='navbar'>
        <nav className='nav'>
          <div className='logo'>
          <img src="/img/logo.jpg" alt="pic3" /><Link to={"/"} className='fig'>Chic inn</Link></div>
          <div className='un'>
          {user ? (
              <>
              <span className='sp'>Welcome, {user}</span>
              </>):(
            <Link to={"/signin"}><li className='navlink non'>Sign In</li></Link>
            )}
          </div>
          <ul>
            <Link to={"/service"}><li className='navlink'>Services</li></Link>
            <Link to={"/about"}><li className='navlink'>About</li></Link>
             <Link to={"/contact"}><li className='navlink'>Contact</li></Link>
             {user ? (
              <>
              <button onClick={handleLogout} className='bttn'>Sign Out</button>
              </>):(
            <Link to={"/signin"}><li className='navlink inss'>Sign In</li></Link>
            )}
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
