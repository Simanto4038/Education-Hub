import React, { useRef, useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
import {  Container } from 'react-bootstrap';


const CameraSelect = () => {
    const [camera,setCamera] = useState([])
    
    const priData = [...camera,camera]

    
    const nameRef = useRef()
    const reMarksRef = useRef()
    console.log(camera);
    console.log(priData);
    const handleUserInput=(e)=>
    {
        
        e.preventDefault()
        const camName = nameRef.current.value;
        
        const reMarks = reMarksRef.current.value;

        const primariInput = {camName,reMarks}
         
        console.log(primariInput)
        
        // const Url= 'https://radiant-plateau-34017.herokuapp.com/adminInput';
              
        // axios.post(Url,destinationdetail).then(res=> {
        //   console.log(res)
        //   if (res.data.insertedId) {
        //     alert('Successfully Saved the User Data')
        //     e.target.reset();
        // }
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });



       
    }


    return (
        <div>
            <Container >
         <div className="col-6 p-3" style={{border:"gray solid 1px"}}>
     <Form onSubmit={handleUserInput}>
     <Form.Item label="Insert Camera">
        <Input ref={nameRef} className='w-75'/>
      </Form.Item>
      <Form.Item label="Insert Remarks">
        <Input ref={reMarksRef} className='w-75' />
      </Form.Item>
     <Button type='submit' >Submit</Button>
     </Form>
         </div>
            </Container>
        </div>
    );
};

export default CameraSelect;