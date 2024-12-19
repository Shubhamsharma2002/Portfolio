import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import { UilGithubAlt, UilInstagram, UilLinkedin } from '@iconscout/react-unicons';
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shubhamjii2002@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/mr_shubham_6684/profilecard/?igsh=ZGt3Y2o4ZWU4MXlu"> 
          <UilInstagram color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Shubhamsharma2002">
          <UilGithubAlt color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/shubhamsharma2026/">
          <UilLinkedin color='white' size={"3rem"}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer