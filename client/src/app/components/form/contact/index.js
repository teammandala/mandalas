import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload } from "antd";
import "./style.css";
import contact from "../../../api/contact";

const ContactForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangemessage = (e) => {
    const message = e.target.value;
    setmessage(message);
  };

  const handlecontactRequest = (e) => {
    e.preventDefault();
    contact
      .contactRequest(fullName, email, message)
      .then((response) => {
        window.alert(
          response.data.message,
          navigate("/"),
          window.location.reload()
        );
      })
      .catch((error) => {
        // window.alert(err.data.message);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          window.alert(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        <Form
          name="contact-form"
          method="post"
          initialValues={{ remember: true }}
          encType="multipart/form-data"
        >
          {/* {error && <div className="error_msg">{error}</div>} */}
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Enter Your Name!" }]}
            onChange={onChangeFullName}
            value={fullName}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Enter your E-Mail!" }]}
            onChange={onChangeEmail}
            value={email}
          >
            <Input placeholder="Email: example@example.com" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: "Message is Empty!" }]}
            onChange={onChangemessage}
            value={message}
          >
            <Input.TextArea placeholder="Your Message: Enter Here" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handlecontactRequest}
            >
              Contact
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
