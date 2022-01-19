import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";
//import Pictures
import img101 from "../images/USA-Sc-101.jpg"
import img102 from "../images/Uk-Sc-101.jpg"
import img103 from "../images/Uk-Sc-102.jpg"
import img104 from "../images/Australia-Sc-101.jpg"
import img105 from "../images/Newzealand-Sc-101.jpg"
import img106 from "../images/Canada-Sc-101.jpg"
import img107 from "../images/Germany-Sc-101.jpg"
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);


  
const Scholership = () => {
    const Images = [img101,img102,img103,img104,img105,img106,img107]
    return (
        <>
        <h3 style={{fontSize:"32px",fontWeight:"700"}} className="text-center">
        Available Schlorships
        </h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
                // when window width is >= 640px
                320: {
                  maxWidth: 320,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            
            className="mySwiper"
          >
          {
            Images.map(img=>{
                return (  <SwiperSlide ><img src={img}  className="img-fluid" alt="" /></SwiperSlide> )
            })
          }
           
           
          </Swiper>
        </>
      );       
};

export default Scholership;