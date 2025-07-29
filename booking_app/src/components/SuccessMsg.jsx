import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../../src/css/confrimstyle.css";

function SuccessMsg() {
  const { id } = useParams(); 
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`http://localhost:7000/bookings/${id}`);
        setBooking(res.data);
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (!booking) return <p>Loading...</p>;
  
  return (
    <body className='main'>
      <div className='m1'>
      <div className='f1'>
      <img className='tick' src="/img/check.png" alt="tick" />
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
