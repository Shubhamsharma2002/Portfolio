import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from'../../img/linkedin.png';
import Instgram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Shubham from '../../img/image1.png'
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Floating from '../FloatingDiv/Floating';
import { themeContext } from '../../contaxt';
function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
              <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy I Am </span>
                <span>Shubham Sharma</span>
                <span> Dedicated MERNstack developer with expertise in MongoDB, Express.js, React, and Node.js. Proficient in building dynamic, responsive web applications and RESTful APIs. Strong background in JavaScript and modern web technologies, with a keen understanding of front-end and back-end integration.</span>
              </div>
              <button className='button i-button'> Hire me</button>
              <div className="i-icons">
                <a href="https://github.com/Shubhamsharma2002"><img src={Github} alt="Github url" /></a>
                <a href="https://www.linkedin.com/in/shubhamsharma2026/"><img src={LinkedIn} alt=" linkdin url" /></a>
                <a href="https://www.instagram.com/mr_shubham_6684/profilecard/?igsh=ZGt3Y2o4ZWU4MXlu"> <img src={Instgram} alt="Intgram url" /></a>
               
              </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Shubham} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
                <Floating img={Crown} text1='Full-Stack' text2='Developer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <Floating img={thumbup} text1='Softawre' text2='Developer'/>
            </div>
        </div>
    </div>
  )
}

export default Intro