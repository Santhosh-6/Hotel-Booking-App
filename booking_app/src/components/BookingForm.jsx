import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableAvail from './TableAvail'
import axios from "axios"
import "../../src/css/bookstyle.css"

function BookingForm() {
  const navigate =useNavigate();

  const [ formData,setFormData ]=useState({
    name:"",
    phone:"",
    guest:"",
    date:"",
    time:"",
    table:null,
  });

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    if(
        !formData.date || !formData.time || !formData.table ||
        !formData.name || !formData.phone || !formData.guest
    ){
        alert("please fill all details and also select a table");
        return;
    }

    await axios.post("http://localhost:7000/bookings", formData);
    navigate("/success");
  };  

  return (
    <div className='form'>
    <div className='form1'>
    <form onSubmit={handleSubmit} className='fom'>
      <h1>Reserve a Table</h1>
      <div className='dd'>
        <div>
      <label>Date</label>
      <input type="date" name='date' value={formData.date} onChange={handleChange}/><br/>
      </div>
      <div>
      <label>Time</label>
      <input type="time" name='time' value={formData.time} onChange={handleChange}/><br/>
       </div>
       </div>
          {formData.date && formData.time && (
            <TableAvail
              selectedDate={formData.date}
              selectedTime={formData.time}
              onSelectTable={(table) => setFormData({ ...formData, table })}
            />
          )}
      <div className='ip'>
      <label>Name</label>
      <input  type="text" placeholder='enter your name' name='name' value={formData.name} onChange={handleChange}/><br/>
      </div>
       <div className='ip'>
      <label>Phone</label>
      <input type="tel" placeholder='enter your phone no' name='phone' value={formData.phone} onChange={(e)=>{
        const value=e.target.value;
        if(/^\d{0,10}$/.test(value)){
          handleChange(e);
        }
      }}/><br/>
       </div>
       <div className='ip'>
      <label>Number of Guests</label>
      <input type="number" placeholder='enter the no of person' name='guest' value={formData.guest} onChange={handleChange}/>      
      </div>
      <div className='ip'>
      <button className='btn' type='submit'>Reserve</button>
      </div>
    </form>
    </div>
     </div>
  );
}



export default BookingForm
