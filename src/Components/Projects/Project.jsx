import React, { useContext } from 'react'
import './Project.css'
import Frontend from '../../img/Frontend.png';
import Backend from '../../img/Backend.png';
import Framework from '../../img/framework.png';
import PaymentGateway from '../../img/PymentGateway.png';
import Card from '../Card/Card';
import Resume from './Shubham_Sharma_Resume.pdf'
import { themeContext } from '../../contaxt';
function Project() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
       <div className="services" id='skills'>
          <div className="awesome">
                  <span style={{ color: darkMode ? "white" : "" }}>My MERN STACK</span>
                  <span>SKILLS</span>
                  <span>List of skill which im using in my all project and daily practice .
                   </span>
                    <a href={Resume} download>
                  <button className='button s-button'>Download CV</button>
                  </a>
                  <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
          </div>
          <div className="cards">
                 <div style={{left:'15rem'}}>
                    <Card 
                    emoji={Frontend}
                    heading={'Frontend'}
                    detail={"HTML,CSS,JS"}
                    detail2={"ejs template engine"}
                    lable={'Certificate'}
                    Link={'https://certificate.codingninjas.com/view/1bf76d5f6542766e'}
                    />
                 </div>
                 <div style={{left:'0.5rem'}}>
                    <Card 
                    emoji={Backend}
                    heading={'Backend'}
                    detail={"Node js"}
                    detail2={"DataBase:MongoDb"}
                    lable={'Certificate'}
                    Link={'https://certificate.codingninjas.com/view/bda9254b7b8b4ccb'}
                    />
                 </div>
                 <div style={{top:'18rem',left:'15rem'}}>
                    <Card 
                    emoji={Framework}
                    heading={'FrameWork'}
                    detail={"Frontend:React js"}
                    detail2={"Backend:Express js"}
                    lable={'Certificate'}
                    Link={'https://certificate.codingninjas.com/view/2c6f92f8b4af8e8a'}
                    />
                 </div>
                 <div style={{top:'18rem',left:'0.5rem'}}>
                    <Card 
                    emoji={PaymentGateway}
                    heading={'PaymentGateWay Intregration'}
                    detail={"Razorpay Payment Gateway"}
                    detail2={"Stripe Payments"}
                    />
                 </div>
                 {/* <div style={{top:'19rem',left:'12rem'}}>
                    <Card 
                    emoji={Framework}
                    heading={'FrameWork'}
                    detail={"figma,huuu,kk,kkk"}
                    />
                 </div> */}
                
                 <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
                 
          </div>
       </div>
  )
}

export default Project