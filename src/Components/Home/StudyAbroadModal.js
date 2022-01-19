import React, { useState } from 'react';

import 'antd/dist/antd.css';
import "./Home.css"
import { Modal} from 'antd';
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

const StudyAbroadModal = (props) => {

    const [loading,setLoading] = useState(false)
    const [visible,setVisible] = useState(false)
    
    const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

    const showModal = () => {
        setVisible(true)
      };
    
     const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible(false)
        }, 3000);
      };

      const  handleCancel = () => {
        setVisible(false)
      };
      return (
        <>
         
          <button onClick={showModal} className='styledBtn'>{props.title}</button>
      
          <Modal
            visible={visible}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>,
             
            ]}
          >
          
          </Modal>
        </>
      );
};

export default StudyAbroadModal;