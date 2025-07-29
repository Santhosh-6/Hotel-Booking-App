import React, { useState } from 'react';
import "../../src/css/signstyle.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', username: '', password: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/signup', form);
      alert('Account Created Successfully');
      navigate('/signin');
    } catch (err) {
      alert('Signup failed or user already exists');
    }
  };
  return (
    <div className="bd">
      <div className="ful up1">
        <form className="s1 up">
          <h1>Sign Up</h1>
          
          <label>Name</label>
          <input type="text" placeholder="name" onChange={(e)=>setForm({...form,name:e.target.value})}/><br /><br />
          
          <label>Email</label>
          <input type="email" placeholder="email" onChange={(e)=>setForm({...form,email:e.target.value})}/><br /><br />
          
          <label>Username</label>
          <input type="text" placeholder="username" onChange={(e)=>setForm({...form,username:e.target.value})}/><br /><br />
          
          <label>Password</label>
          <input type="password" placeholder="password" onChange={(e)=>setForm({...form,password:e.target.value})}/><br /><br />
          
          <div className="but">
            <button onClick={handleSignup}>Sign Up</button>
          </div>

          <div className="flx1">
            <p><Link to={"/signin"} className='sig'>Already have an account?</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
