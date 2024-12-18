import React from 'react'
import './NavBar.css';
function NavBar() {
  return (
     <div className="n-wrapper">
        <div className="left-child">
            <div className="logo">Shubham</div>
            <span>Toggel</span>
        </div>
        <div className="right-child">
            <div className="otion-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Experince</li>
                    <li>Services</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className='button n-button'>Contact Us</button>
        </div>
     </div>
  )
}

export default NavBar