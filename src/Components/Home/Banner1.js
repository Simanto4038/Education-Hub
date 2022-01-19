import React from 'react';
import { Carousel } from 'react-bootstrap';
import img101 from "../images/Banner106.jpg"
import img102 from "../images/Banner102.jpg"
import img103 from "../images/Banner103.jpg"

import img105 from "../images/Banner105.jpg"
import img106 from "../images/Banner107.jpg"

import img108 from "../images/Banner112.jpg"
import img109 from "../images/Banner113.jpg"
import img110 from "../images/Banner114.jpg"
import AppointmentButton from '../NevigationBar/AppointmentButton';
import "./Home.css"
const Banner1 = () => {

  const Image = [
    {img:img106},
    {img:img101,caption:"Study In A Quality Environment",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
    {img:img102,caption:"Take A Bold Step Towards Success",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
    {img:img103,caption:"Live In Your Dream City ",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
  
    {img:img105,caption:"Live In Your Dream City ",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},

    {img:img108,caption:"Live In Your Dream City ",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
    {img:img109,caption:"Live In Your Dream City ",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
    {img:img110,caption:"Live In Your Dream City ",detail:"Get the best guidance from our counsilors,who will help you to choose the best courses for you and process you paper to ensure your admission"},
  ]
    return (
        <div>
            <Carousel fade>
  {
    Image.map(item => {
     return(
      <Carousel.Item>
      <img
        className="d-block w-100 car-img"
        src={item.img}
        alt="Banner-Main"
      />
      <Carousel.Caption>
       <div className="row">
         <div className="col-lg-6 d-lg-block d-none mx-auto">
         {/* <div className='carCap '>
       <h3 className='p-3'>{item.caption}</h3>
        <h6 className='w-50 mx-auto text-dark  p-2'>{item.detail}</h6>
      
       </div> */}
       <AppointmentButton/>
         </div>
         
       </div>
      </Carousel.Caption>
    </Carousel.Item>
     )
    })
  }
  
</Carousel>
        </div>
    );
};

export default Banner1;