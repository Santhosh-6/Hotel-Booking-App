import "../../src/css/signstyle.css"
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/api/signin', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.name);
      alert('Login successful!');
      navigate('/booking');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='bd'>
    <div class="ful">
    <form class="s1">
        <h1>Sign In</h1>
        <label>User Nmae</label>
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
        <label >Password</label>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
               <div class="but">
        <button type="submit" onClick={handleLogin}>Sign In</button>
       </div>
        <div className='flx1'>
       <p > <Link to={"/signup"} className='sig'>Don't have an account?</Link></p>
        </div>
       </form>
    </div>
    </div>
  )
}

export default Signin
