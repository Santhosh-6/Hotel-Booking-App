import React, { useEffect } from 'react'
import BookingForm from '../components/BookingForm'
import { useNavigate } from 'react-router-dom'


function BookingPage() {
 const navigate=useNavigate();

 useEffect(()=>{
   const user=localStorage.getItem("logInUser");
   if (!user) navigate("/signIn");
 },[]);

  return (
    <>
      <BookingForm/> 
    </>
  )
}

export default BookingPage
