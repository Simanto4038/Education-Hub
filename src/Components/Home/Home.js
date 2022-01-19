import React from 'react';
import { Container} from 'react-bootstrap';
import img101 from "../images/austrila.jpg"
import img102 from "../images/Canada101.jpg"
import img103 from "../images/newzealand101.jpg"
import img104 from "../images/USA102.jpg"
import img105 from "../images/Uk101.jpg"
import img106 from "../images/Germany-2021.jpg"
import Banner1 from './Banner1';
import SideOption from './SideOption';
import Scholership from './Scholership';
import Events from './Events';
import PartnerUniversity from './PartnerUniversity';
import Blogs from './Blogs';
import FAQ from './FAQ';
const Home = () => {
    //const StudyDestination = [img101,img102,img103,img104,img103,img104]
    const StudyDestination = [
        {image:img101,name:"Australia"},
        {image:img102,name:" Canada "},
        {image:img105,name:"United Kingdom"},
        {image:img104,name:"USA"},
        {image:img106,name:"Germany"},
        {image:img103,name:"Newzealand"},
]
    return (
        <div style={{backgroundColor:"whitesmoke"}}>
            <Banner1/>
            <Container className='pt-5' >
                
              <div className="row">
                  <div className="col-12  col-lg-8">
                         <div className="row gy-3 gx-3">
                             {
                                 StudyDestination.map(item=>{
                                  return(
                                    <div className="col-12 col-md-6 col-lg-4"
                                     style={{height:"350px",Width:"100%"}}>
                                    <img src={item.image} className='img-fluid' alt="" 
                                    style={{
                                    border:"solid 10px white",
                                    borderRadius:"10px",
                                    boxShadow:"2px 2px 15px gray",
                                    height:"90%"}} />
                                    <h5 className='text-center'>{item.name}</h5>
                                    </div>
                                  )
                                 })
                             }
                             
                         </div>
                  </div>
                  <div className="col-12 col-lg-4">
                     <SideOption/>
                  </div>
              </div>
            </Container>
            <Container className='mt-4 mb-4'>
            <Scholership/>
            </Container>
            <Container className='mt-4'>
            <Events/>
            </Container>
            <Container className='mt-4'>
            <PartnerUniversity/>
            </Container>
            <Container className='mt-4'>
            <PartnerUniversity/>
            </Container>
            <div className="blogs">
            <Container >
            <Blogs/>
            </Container>
            </div>
            <div className='Faq'>
            <Container >
            <FAQ/>
            </Container>
            </div>
           
        </div>
    );
};

export default Home;