import React, { useContext } from 'react'

import "swiper/css";
import "./PortFolio.css"
import { Swiper,SwiperSlide } from 'swiper/react';

import Ecommerce from '../../img/ecommerce.png';

import { themeContext } from '../../contaxt';
import inventry from '../../img/inventry.jpg';
import chatus from '../../img/chatus.jpg';
function PortFolio() {
          const theme = useContext(themeContext);
          const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="project">
          {/* heading */}
          <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
          <span>Portfolio</span>
    
          {/* slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            breakpoints={{
                320: { // Mobile screens
                  slidesPerView: 1,
                  direction: 'horizontal', // Explicitly set horizontal direction for mobile
                },
                768: { // Tablet
                  slidesPerView: 2,
                  direction: 'horizontal', // Explicitly set horizontal direction for tablets
                },
                1024: { // Desktop
                  slidesPerView: 3,
                  direction: 'horizontal', // Ensure horizontal direction for desktop
                },
              }}
          >
            <SwiperSlide>
              <img src={Ecommerce} alt="" />
              <p>E-com Backend Api</p>
              <a href="https://github.com/Shubhamsharma2002/E-com-backendApi" target='_blank'>
              <button className='button '>Github</button>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <img src={inventry} alt="" />
              <p> InventryApp</p>
              <a href="https://github.com/Shubhamsharma2002/InventryApp" target='_blank'>
              <button className='button '>Github</button>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <img src={chatus} alt="" />
              <p>Chat us</p>
              <a href="https://github.com/Shubhamsharma2002/chatus" target='_blank'>
              <button className='button '>Github</button>
              </a>
            </SwiperSlide>
           
          </Swiper>
        </div>
      );
}

export default PortFolio