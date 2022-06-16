import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./style.css";
import userAPI from "../../../api/user";

const ProfileUpdateForm = () => {
  const navigate = useNavigate();
  const currentUser = userAPI.getCurrentUser();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
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

  const onChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeAvatar = (e) => {
    const avatar = e.target.files[0];
    setAvatar(avatar);
  };

  const handleKYCRequest = (e) => {
    e.preventDefault();
    userAPI
      .updateUser(username, email, name, phone, address, bio, avatar)
      .then((response) => {
        window.alert(
          response.message,
          navigate(`/profile/${currentUser.username}`),
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
          setError(error.response.data.message);
        }
      });
  };

  return (
    <>
      <Form
        name="profileUpdate"
        method="put"
        initialValues={{ remember: true }}
        encType="multipart/form-data"
      >
        <p className="form-title">Profile Update</p>
        {error && <div className="error_msg">{error}</div>}
        <Form.Item name="username" onChange={onChangeUsername} value={username}>
          <Input placeholder={currentUser.username} />
        </Form.Item>

        <Form.Item name="email" onChange={onChangeEmail} value={email}>
          <Input placeholder={currentUser.email} />
        </Form.Item>

        <Form.Item name="name" onChange={onChangeName} value={name}>
          <Input placeholder={currentUser.name} />
        </Form.Item>

        <Form.Item name="phone" onChange={onChangePhone} value={phone}>
          <Input placeholder={currentUser.phone} />
        </Form.Item>

        <Form.Item name="address" onChange={onChangeAddress} value={address}>
          <Input placeholder={currentUser.address} />
        </Form.Item>

        <Form.Item name="bio" onChange={onChangeBio} value={bio}>
          <Input.TextArea placeholder={currentUser.bio} />
        </Form.Item>

        <Form.Item
          name="avatar"
          onChange={onChangeAvatar}
          // value={idImage}
        >
          <Upload name="avatar" type="file" htmlFor="file" listType="picture">
            <Button>
              <UploadOutlined /> Upload Avatar
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="update-form-button"
            onClick={handleKYCRequest}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProfileUpdateForm;
