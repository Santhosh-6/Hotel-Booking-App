import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../src/css/confrimstyle.css"

function SuccessMsg() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const lastBooking = bookings[bookings.length - 1];
    setBooking(lastBooking);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!booking) return <p>Loading...</p>;
  
  return (
    <body className='main'>
      <div className='m1'>
      <div className='f1'>
      <img className='tick' src="src\img\check.png" alt="tick" />
      <h1>Reservation Confrimed</h1>
      <p>Your reservation has been successfully made</p>
            <div className="receipt-box">
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Phone:</strong> {booking.phone}</p>
        <p><strong>Guests:</strong> {booking.guest}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Table:</strong> {booking.table}</p>
      </div>
      <button onClick={handlePrint} className="print-btn">
         Print Receipt
      </button>
      <Link to="/">
          <button>Back to Home</button>
      </Link>
      </div>
      </div>
    </body>
  )
}

export default SuccessMsg
