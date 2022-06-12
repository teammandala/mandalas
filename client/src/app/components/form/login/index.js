import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Input, Checkbox } from "antd";
import "./style.css";
import user from "../../../api/user";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    user
      .login(username, password)
      .then((response) => {
        window.alert(response.message, window.location.reload(), navigate("/"));
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
      <Form name="login-form" initialValues={{ remember: true }}>
        <p className="form-title">Welcome back</p>
        <p>Login to the Mandala</p>
        {error && <div className="error_msg">{error}</div>}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          onChange={onChangeUsername}
          value={username}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          onChange={onChangePassword}
          value={password}
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
            onClick={handleLogin}
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
