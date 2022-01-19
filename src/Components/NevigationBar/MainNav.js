
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Menu, Dropdown} from 'antd';
import 'antd/dist/antd.css';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const MainNav = () => {
    const myNAVstyle={backgroundColor:"rgba(255, 255, 255, 0.847)",
                    color:"black",
                    fontWeight:"600",
                    border:"none",
                    borderRadius:"1px 25px ",
                    padding:"10px",
                    margin:"10px",
                    width:"50%"}
    const menu = (
        <Menu className='myDropdown'>
           <Menu.Item style={myNAVstyle}>
            <>AUSTRALIA</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>CANADA</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>UNITED KINGDOM (UK)</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>GERMANY</>
          </Menu.Item>
        </Menu>
      );
    const menu2 = (
        <Menu className='myDropdown'>
          <Menu.Item style={myNAVstyle}>
            <>Sutudent Support</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>VISA Support</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>One to One Counsiling</>
          </Menu.Item>
          <Menu.Item style={myNAVstyle}>
          <>One to One Counsiling</>
          </Menu.Item>
        </Menu>
      );
    return (
        <div  style={{backgroundColor:"white"}}>
            <Navbar collapseOnSelect expand="lg" bg="gray" variant="light">
  <Container>

  <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='w-50 mx-auto'/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto ">
     
      <Nav.Link className='h5'> <NavLink to='/' className="link">Home</NavLink></Nav.Link>
      <Nav.Link href="#features" className='h5'>About Us</Nav.Link>
 
      <Dropdown overlay={menu} placement="bottomCenter">
      <Nav.Link  className='h5'>Destinations</Nav.Link>
      </Dropdown>
    
 
      
      <Dropdown overlay={menu2} placement="bottomCenter">
      <Nav.Link  className='h5'>Our Services</Nav.Link>
      </Dropdown>
    
  
   
  
  <Nav.Link href="#features" className='h5 p-2'>Road To IELTS</Nav.Link>
  <Nav.Link href="#features" className='h5 p-2'>Blogs</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default MainNav;