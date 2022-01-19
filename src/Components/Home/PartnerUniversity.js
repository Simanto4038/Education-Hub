
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Partner.css";
//import Pictures
import img101 from "../images/ausLogos/aus101.png"
import img102 from "../images/ausLogos/aus102.png"
import img103 from "../images/ausLogos/aus103.png"
import img104 from "../images/ausLogos/aus104.png"
import img105 from "../images/ausLogos/aus105.png"
import img106 from "../images/ausLogos/aus106.png"
import img107 from "../images/ausLogos/aus107.png"
import img108 from "../images/ausLogos/aus108.png"
import img109 from "../images/ausLogos/aus109.png"
import img110 from "../images/ausLogos/aus110.png"
import img111 from "../images/ausLogos/aus111.png"
import img112 from "../images/ausLogos/aus112.png"
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);


const PartnerUniversity = () => {
    const Images = [img101,img102,img103,img104,img105,img106,img107,img108,img109,img110,img111,img112]
    return (
        <>
        <h3 style={{fontSize:"32px",fontWeight:"700"}} className="text-center">
        Our Australian Partner Unievrsity
        </h3>
          <Swiper
            
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
                // when window width is >= 640px
                320: {
                  maxWidth: 320,
                  slidesPerView: 2,
                  spaceBetween:20
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 4,
                  spaceBetween:20
                },
              }}
            
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            // pagination={{
            //   clickable: true
            // }}
            
            className="mySwiper SwiperPartner"
          >
          {
            Images.map(img=>{
                return (  <SwiperSlide className="SwiperPartner-Slide" ><img src={img}  className="img-fluid" alt="" /></SwiperSlide> )
            })
          }
           
           
          </Swiper>
        </>
      );       
    
};

export default PartnerUniversity;