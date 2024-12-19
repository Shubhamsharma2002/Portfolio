import React from 'react'
import './NavBar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
function NavBar() {
  return (
     <div className="n-wrapper" id='navbar'>
        <div className="left-child">
            <div className="logo">Shubham</div>
            <span><Toggle/></span>
        </div>
        <div className="right-child">
            <div className="otion-list">
                <ul style={{listStyleType:'none'}}>
                <Link activeClass="active" to="navbar" spy={true} smooth={true} className='li'>
                Home
               </Link>
               <Link activeClass="active" to="experience" spy={true} smooth={true} className='li'>
               Experince
               </Link>
               <Link activeClass="active" to="skills" spy={true} smooth={true} className='li'>
                Skills
               </Link>
               <Link activeClass="active" to="project" spy={true} smooth={true} className='li'>
                Project
               </Link>
                </ul>
            </div>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <button className='button n-button'>Contact Us</button>
            </Link>
            
        </div>
     </div>
  )
}

export default NavBar