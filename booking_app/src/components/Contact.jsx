import React, { useState } from 'react'
import Navbar from './Navbar'
import "../../src/css/contactstyle.css"
import axios from "axios";

function Contact() {
  const [formm, setFormm] = useState({ name: "", email: "", message: "" });

  const handleChangee = (e) => {
    setFormm({ ...formm, [e.target.name]: e.target.value });
  };

const handleSubmitt = async (e) => {
  e.preventDefault();

  if (!formm.name || !formm.email || !formm.message) {
    alert("Please fill out all fields.");
    return;
  }

  try {
    await axios.post("http://localhost:7000/api/contact", formm);
    alert("Thank you! Your message has been submitted.");
    setFormm({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Submission failed:", error);
    alert("Failed to send message. Try again.");
  }
};


  return (
    <>
    <div className='conf'>
    <Navbar/>
    <div className='conpage'>
    <div className='con1'>
        <div>
      <h1>Contact Us</h1>
      <p>Need to get in touch? We're here to help! Fill out the form below or reach us directly via phone or email.</p>
      </div>
    </div>
    <div className='cont'>
      <div className='con2'>
        <div><a href="mailto:into@chicinn.com" target='_blank'><img src="/img/email.png" alt="mail" /></a><p>into@chicinn.com</p></div>
        <div><a href="tel:+001234567890"><img src="/img/phone.png" alt="phn" /></a><p>+00 1234 567 890</p></div>
    </div>
    <div className='confom'>
    <form className='cform' onSubmit={handleSubmitt}>
       <div className='cf'>
        <label>Nmae</label>
        <input type="text"name="name" placeholder="Your Name" value={formm.name} onChange={handleChangee}/>
       </div>
       <div className='cf'>
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" value={formm.email} onChange={handleChangee}/>
       </div>
       <div className='cf'>
        <label>Message</label>
        <textarea rows={3} name="message" placeholder="Your Message" value={formm.message} onChange={handleChangee}></textarea>
       </div>
       <div className='cf'>
        <button type='submit' className='btn'>Send</button>
       </div>
    </form>
    </div>
    </div>
    </div>
        <footer className='cfooter'>
       <p>&copy:@2025 Chic Inn. All Rights Reserved.</p>
    </footer>
    </div>
    </>
  )
}

export default Contact
