import React from 'react';
import FacebookPage from './FacebookPage';
import "./Home.css"
import StudyAbroadModal from './StudyAbroadModal';

const SideOption = () => {
    return (
        <>
            < p style={{fontSize:"38px",fontWeight:"300",textShadow:"2px 20px 10px black"}} className='text-center'>Apply Online</p>
           <StudyAbroadModal title={'Study Abroad'}/>
           <StudyAbroadModal title={'Skilled Migration'}/>
           < p style={{fontSize:"28px",textShadow:"2px 15px 10px black"}} className='text-center'>Call Back Request</p>
           <button className='styledBtn'>Request a Call Back</button>
           <div className='mt-4 mb-4 p-auto' >
           <FacebookPage/>
           </div>
        </>
    );
};

export default SideOption;