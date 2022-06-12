import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Input, Checkbox } from "antd";
import "./style.css";

const LoginForm = () => {
  return (
    <>
      <Form name="login-form" initialValues={{ remember: true }}>
        <p className="form-title">Welcome back</p>
        <p>Login to the Mandala</p>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={"/#"}
          >
            LOGIN
          </Button>
        </Form.Item>
        <p>
          Don't have and account!{" "}
          <Link to="/signup">
            {" "}
            <b>Sign Up</b>
          </Link>{" "}
        </p>
        <p>
          or{" "}
          <Link to="#">
            {" "}
            <b>Forgot Password</b>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default LoginForm;
