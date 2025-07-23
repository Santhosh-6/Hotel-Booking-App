import React from 'react'
import "../../src/css/homestyle.css"
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function HomePage() {
   const navigate =useNavigate();

   const handleBookTable=() =>{
    const user = localStorage.getItem("logInUser");
    if(!user){
      navigate("/signIn");
    }else{
      navigate("/booking");
    }
   };
  return (
    <>
    <Navbar />
<body className="home">
      <div className="inner1">
        <div className="inner2">
          <h1>Welcome To Our Hotel</h1>
          <p>Book your Table Now</p>
          <button onClick={handleBookTable}>Book a Table</button>
        </div>
      </div>

      <div className="intro">
        <h2>Why Choose Us?</h2>
        <p>Experience world-class dining with ambient lighting, premium seating, and exceptional hospitality at our hotel.</p>
      </div>

      <div className="dishes">
        <h2>Our Featured Dishes</h2>
        <div className="dish-cards">
          <div className="c"><img src="src\img\grilled-chicken-horizontal-1532030541.jpg" alt="pic1" /><p>Grilled Chicken</p></div>
          <div className="c s"><img src="src\img\creamy-italian-sausage-pasta-recipe-snippet-3.jpg" alt="pic2" /><p>Italian Pasta</p></div>
          <div className="c"><img src="src\img\12332071-2013-signature-plated-dessert-competition.jpg" alt="pic3" /><p>Signature Dessert</p></div>
        </div>
      </div>

      <div className="reviews">
        <h2>What Our Guests Say</h2>
        <blockquote>"Absolutely wonderful! Booking was smooth and food was amazing!"</blockquote>
        <blockquote>"Best dining experience. Cozy, clean, and quick service!"</blockquote>
      </div>

      <footer>
        <p> Location: 123 Food Street, City |  Open: 10AM - 11PM |  Call: 98765 43210</p>
      </footer>
    </body>
    </>
  )
}

export default HomePage
