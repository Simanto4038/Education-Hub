import React, { useState } from 'react';

import 'antd/dist/antd.css';

import { Modal, TimePicker} from 'antd';
import {
    Form,
    Input,
    Button,
    
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    
    Switch,
  } from 'antd';
import "./Navbar.css"
const AppointmentButton = () => {

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
          <button  className='btn p-3 ps-5 pe-5 aptBtn '
            
                   onClick={showModal}>
            Book An Appointment
          </button>
          <Modal
            visible={visible}
            title="Book An Appointment For Free Assesmennt"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>
            ]}
          >
              <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      
      <Form.Item label="Your Name">
        <Input />
      </Form.Item>
      <Form.Item label="Phone No">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Destinations">
        <Select
         mode="multiple"
         allowClear
         style={{ width: '100%' }}
         placeholder="Please select"
         
         >
          <Select.Option value="Australia">Australia</Select.Option>
          <Select.Option value="USA">USA</Select.Option>
          <Select.Option value="Canada">Canada</Select.Option>
          <Select.Option value="UK">UK</Select.Option>
          <Select.Option value="Newzealand">Newzealand</Select.Option>
          
        </Select>
      </Form.Item>
      
      <Form.Item label="IELTS/TOFEL">
        <Cascader
          options={[
            {
              value: 'IELTS',
              label: 'IELTS SCORE',
              children: [
                {
                  value: '7+',
                  label: '7+',
                },
                {
                  value: '6+',
                  label: '6+',
                },
                {
                  value: '5.5+',
                  label: '5.5+',
                },
              ],
            },
            {
              value: 'TOFEL',
              label: 'TOFEL SCORE',
              children: [
                {
                  value: '7+',
                  label: '7+',
                }
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Time">
      <TimePicker use12Hours format="h:mm a"  />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  
          </Modal>
        </>
      );
};

export default AppointmentButton;