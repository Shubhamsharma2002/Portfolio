import React from 'react'
import './Project.css'
import Humble from '../../img/humble.png';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import Resume from './ShubhamSharma_Resume.pdf'
function Project() {
  return (
       <div className="services">
          <div className="awesome">
                  <span>My Awesome</span>
                  <span>Projects</span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Ex nobis, praesentium voluptate iure obcaecati aspernatur iste voluptatem neque cumque</span>
                    <a href={Resume} download>
                  <button className='button s-button'>Download CV</button>
                  </a>
                  <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
          </div>
          <div className="cards">
                 <div style={{left:'14rem'}}>
                    <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"figma,huuu,kk,kkk"}
                    />
                 </div>
                 <div style={{top:'12rem',left:'-4rem'}}>
                    <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"figma,huuu,kk,kkk"}
                    />
                 </div>
                 <div style={{top:'19rem',left:'12rem'}}>
                    <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"figma,huuu,kk,kkk"}
                    />
                 </div>
                 <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
                 
          </div>
       </div>
  )
}

export default Project