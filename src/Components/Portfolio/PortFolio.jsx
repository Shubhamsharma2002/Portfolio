import React, { useContext } from 'react'

import "swiper/css";
import "./PortFolio.css"
import { Swiper,SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import HOC from '../../img/hoc.png';
import { themeContext } from '../../contaxt';
// import Sidebar from '../../img/sidebar.png';
// import Sidebar from '../../img/sidebar.png';
function PortFolio() {
          const theme = useContext(themeContext);
          const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
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
              <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HOC} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default PortFolio