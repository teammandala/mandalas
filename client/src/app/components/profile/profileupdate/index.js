import React, { useState } from "react";
import user from "../../../api/user";
import { UploadOutlined } from "@ant-design/icons";
import { Form, Button, Input, Upload } from "antd";
import { useNavigate } from "react-router-dom";

const Profileupdate = () => {
  const currentUser = user.getCurrentUser();

  const navigate = useNavigate();

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

  return (
    <div className="container-fluid h-100">


      <Form>
        <div>Username</div>
        <Form.Item
          name="username"
          onChange={onChangeUsername}
          value={username}
        >
          <Input placeholder={currentUser.username} />
        </Form.Item>

        <div>Full Name</div>
        <Form.Item
          name="name"
          onChange={onChangeName}
          value={name}
        >
          <Input placeholder={currentUser.name} />
        </Form.Item>

        <div>E-mail</div>
        <Form.Item
          name="email"
          onChange={onChangeEmail}
          value={email}
        >
          <Input placeholder={currentUser.email} />
        </Form.Item>

        <div>Contact No.</div>
        <Form.Item
          name="phone" onChange={onChangePhone}
          value={phone}
        >
          <Input placeholder={currentUser.phone} />
        </Form.Item>

        <div>Address</div>
        <Form.Item
          name="address"
          onChange={onChangeAddress}
          value={address}
        >
          <Input placeholder={currentUser.address} />
        </Form.Item>

        <div>Role</div>
        <Form.Item
        >
          <Input disabled placeholder={currentUser.role} />
        </Form.Item>
      </Form>

      <div>Bio</div>
      <Form.Item
        name="bio" onChange={onChangeBio}
        value={bio}
      >
        <textarea placeholder={currentUser.bio} />
      </Form.Item>

      <div>Profile</div>
      <Form.Item
        name="avatar" onChange={onChangeAvatar}
        value={avatar}
      >
        <Upload name="avatar" type="file" htmlFor="file" listType="picture" >
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <hr className="mt-0 mb-4" />
      <button type="button" className="btn btn-primary btn-block">
        Save Changes
      </button>
    </div>
  );
};

export default Profileupdate;
