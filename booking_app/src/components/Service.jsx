import React from 'react'
import "../../src/css/servicestyle.css"
import Navbar from './Navbar'

function Service() {
  return (
    <body className='sev'>
      <Navbar/>
      <div className='sev1'>
        <div className='sd1'>
            <div className='sdev'>
            <h2>Fine Dining</h2>
            <p>Savor exquisite meals in our elegent and welcoming resturant</p>
            </div>
        </div>
        <div className='sd2'>
            <div className='sdev'>
                <h2>Event Booking</h2>
                <p>Plan your special events in our versatile function spaces</p>
            </div>
        </div>
        <div className='sd3'>
            <div className='sdev'>
                <h2>Free WiFi</h2>
                <p>Stay connected with complimentary high-speed internet</p>
            </div>
        </div>
        <div className='sd4'>
            <div className='sdev'>
                <h2>Transport</h2>
                <p>Enjoy our seamless transortion service for your conveniences</p>
            </div>
        </div>
      </div>
              <footer className='cfooter'>
       <p>&copy:@2025 Chic Inn. All Rights Reserved.</p>
    </footer>
    </body>
  )
}

export default Service
