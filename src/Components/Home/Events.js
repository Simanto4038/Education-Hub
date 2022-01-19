import React from 'react';
import { Container } from 'react-bootstrap';
import eventImg from "../images/event-Banner.jpg"
import "./Home.css"
import StudyAbroadModal from './StudyAbroadModal';

const Events = () => {
    return (
        <Container >
            <div className="row gx-5 gy-4">
                <div className="col-lg-8 col-12">
                    <div className="events bg-white">
                     <h2 className="text-center">  Current Event </h2>
                     <div className="row m-4" >
                     <div className="col-12 col-lg-6 eventImg">
                         <img src={eventImg} className='img-fluid eventBanner' alt="" />
                     </div>
                     <div className="col-12 col-lg-6 h-100 text-center ">
                         <h4 className='p-2 eventHeader'>International Application Week</h4>
                        <div className="eventDetail">
                        <p >Date : JAN 1 - FEB 15</p>
                         <p >Time : 9:00 AM - 5:30 PM</p>
                         <h6>Location : Dhaka Office</h6>
                        </div>
                            <StudyAbroadModal title={'Book Your Seat'}/>
                     </div>
                     </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="events bg-white">
                    <div className="upcomingEvent">
                 <h5>  Upcoming Events </h5>
                   </div>
                   <div className="PriviousEvent">
                   <h5> Privious Events </h5>
                   </div>
                    </div>
                  
                </div>

            </div>
        </Container>
    );
};

export default Events;