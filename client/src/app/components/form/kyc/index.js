import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./style.css";
import userAPI from "../../../api/user";
import kyc from "../../../api/kyc";

const KYCForm = () => {
  const navigate = useNavigate();
  const currentUser = userAPI.getCurrentUser();
  const user = currentUser._id;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [idImage, setID_Image] = useState("");

  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeCountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeIdImage = (e) => {
    const idImage = e.target.files[0];
    setID_Image(idImage);
  };

  const handleKYCRequest = (e) => {
    e.preventDefault();
    kyc
      .kycRequest(fullName, email, phone, address, country, user, idImage)
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
      <Form
        name="kyc-form"
        method="post"
        initialValues={{ remember: true }}
        encType="multipart/form-data"
      >
        <p className="form-title">Mandala</p>
        <p>KYC Request Form</p>
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
          name="phone"
          rules={[{ required: true, message: "Please input your phone no.!" }]}
          onChange={onChangePhone}
          value={phone}
        >
          <Input placeholder="9811111111" />
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
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
          onChange={onChangeAddress}
          value={address}
        >
          <Input placeholder="address" />
        </Form.Item>

        <Form.Item
          name="country"
          rules={[{ required: true, message: "Please input your address!" }]}
          onChange={onChangeCountry}
          value={country}
        >
          <Input placeholder="country" />
        </Form.Item>

        <Form.Item
          name="idImage"
          rules={[{ required: true, message: "Please input your address!" }]}
          onChange={onChangeIdImage}
          // value={idImage}
        >
          <Upload name="idImage" type="file" htmlFor="file" listType="picture">
            <Button>
              <UploadOutlined /> Click to upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleKYCRequest}
          >
            Request
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default KYCForm;
