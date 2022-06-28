import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./style.css";
import userAPI from "../../../api/user";
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
     <div className="col-md-3 center">
      <Form
        name="contact-form"
        method="post"
        initialValues={{ remember: true }}
        encType="multipart/form-data"
        
      >
        {/* {error && <div className="error_msg">{error}</div>} */}
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please input your Full Name!" }]}
          onChange={onChangeFullName}
          value={fullName}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          onChange={onChangeEmail}
          value={email}
        >
          <Input placeholder="example@example.com" />
        </Form.Item>

       
          
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
          onChange={onChangemessage}
          value={message}
        >
          <Input placeholder="message" />
        </Form.Item>
   

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handlecontactRequest}
          >
            Request
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default ContactForm;