import React from 'react';
import AppointmentButton from './AppointmentButton';
import img101 from './logo102.jpg'
const NavLogo = () => {
    return (
        <div>
            <div className="container p-3 mx-auto d-flex align-items-center  row">
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
                    <img src={img101} className='img-fluid' style={{maxHeight:"115px",width:"155px"}} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                    <AppointmentButton/>   
               </div>
            </div>
        </div>
    );
};

export default NavLogo;