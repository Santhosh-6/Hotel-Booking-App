import React from 'react';
import "../../src/css/aboutstyle.css"
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <body className="abpage">    
      <div className="abdiv">
       <div className='abflex'> 
        <div className='in'>
        <h1>About Chic Inn</h1>
        <p>
          Welcome to Chic Inn — your ultimate destination for fine dining and unforgettable experiences.
          Our hotel blends elegant ambiance with gourmet cuisine to give you a premium experience.
        </p>
        <p>
          Whether you're celebrating a special occasion or simply enjoying a quiet meal, our team is dedicated
          to making every moment memorable. From signature dishes to carefully curated decor, every detail
          is designed with care.
        </p>
      </div>
      <div className='out'>
        <img src="/img/login (2).png" alt="picture" />
      </div>
      </div>
      </div>
      <footer >
        <div className="abfooter">
        <div className='ft1'><h4>Chic Inn</h4>
        <div>
          <p>123 Food Street, YourCity</p>
          <p>Email: info@chicinn.com</p>
          <p> Phone: +1-234-567-890</p>
          <p>Open: 10AM - 11PM</p>
        </div>
        </div>
        <div className='ft2'>
          <p>&copy:@2025 Chic Inn. All Rights Reserved.</p>
        </div>
        </div>
      </footer>
    </body>
    </>
  );
};

export default About;
