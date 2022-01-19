import React from 'react';

const UpperNav = () => {
    return (
        <section
        className="d-flex justify-content-lg-center justify-content-between p-2"
        style={{backgroundColor:"rgb(68, 67, 90)"}}     
        >

 <div className="me-5">
   <span className='text-white'>Follow Us On:</span>
 </div>
 


 <div>
   <a href='#' className="text-white me-4">
     <i className="fab fa-facebook-f"></i>
   </a>
   <a href='#'className="text-white me-4">
     <i className="fab fa-instagram"></i>
   </a>
   <a href='#'className="text-white me-4">
     <i className="fab fa-linkedin"></i>
   </a>
  
 </div>

</section>
    );
};

export default UpperNav;