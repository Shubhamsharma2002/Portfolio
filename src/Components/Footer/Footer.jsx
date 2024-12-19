import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import { UilFacebook, UilGithub, UilGithubAlt, UilInstagram, UilLinkedin } from '@iconscout/react-unicons';
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shubhamjii2002@gmail.com</span>
        <div className="f-icons">
          <UilInstagram color="white" size={"3rem"} />
          <UilGithubAlt color="white" size={"3rem"} />
          <UilLinkedin color='white' size={"3rem"}/>
        </div>
      </div>
    </div>
  );
}

export default Footer