import React from "react";
import Lottie from "react-lottie";
import * as login from "../../Assets/Animation/login.json";
import { Button, Checkbox, Form, Input } from 'antd';
import FormLogin from "../../Components/FormLogin/FormLogin";

const Login = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <div className="flex">
      {/* Animation */}
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="w-1/2">
      {/* <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form> */}
        <FormLogin/>
      </div>
    </div>
  );
};

export default Login;
