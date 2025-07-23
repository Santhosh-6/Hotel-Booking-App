import React, { useState } from 'react'
import "../../src/css/signstyle.css"
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate();

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{
    const users=JSON.parse(localStorage.getItem("users"))||[];
    const foundUser=users.find((user)=>user.username===username && user.password === password);
    if (foundUser){
      localStorage.setItem("logInUser",JSON.stringify(foundUser));
      alert("Login successfully!");
      navigate("/");
    }else{
      alert("Invalid Credentials.")
    }
  }

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
        <p>Forget Password?</p>
        </div>
       </form>
    </div>
    </div>
  )
}

export default Signin
