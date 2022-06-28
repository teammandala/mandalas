import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Input } from "antd";
import "./style.css";
import user from "../../../api/user";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangePassword1 = (e) => {
    const password1 = e.target.value;
    setPassword1(password1);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    user
      .register(username, name, email, phone, password, password1)
      .then((response) => {
        window.alert(response.data.message, navigate("/login"));
      })
      .catch((error) => {
        // window.alert(err.data.message);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      });
  };

  return (
    <>
      <Form name="signup-form" initialValues={{ remember: true }}>
        <p className="form-title">Welcome!</p>
        <p>To Mandala</p>
        {error && <div className="error_msg">{error}</div>}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          onChange={onChangeName}
          value={name}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          onChange={onChangeUsername}
          value={username}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          onChange={onChangeEmail}
          value={email}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
          onChange={onChangePhone}
          value={phone}
        >
          <Input placeholder="Phone" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          onChange={onChangePassword}
          value={password}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="password1"
          rules={[{ required: true, message: "Please confirm password!" }]}
          onChange={onChangePassword1}
          value={password1}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleRegister}
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
