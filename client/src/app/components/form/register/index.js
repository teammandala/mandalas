import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Input } from "antd";
import "./style.css";

const RegisterForm = () => {
  return (
    <>
      <Form name="signup-form" initialValues={{ remember: true }}>
        <p className="form-title">Welcome!</p>
        <p>To Mandala</p>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={"/"}
          >
            Sign Up
          </Button>
        </Form.Item>
        <p>
          Already have and account!{" "}
          <Link to="/login">
            {" "}
            <b>Login</b>
          </Link>{" "}
        </p>
      </Form>
    </>
  );
};

export default RegisterForm;
