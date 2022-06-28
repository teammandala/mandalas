import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "./style.css";
import userAPI from "../../../api/user";

const AvatarUpdate = () => {
  const navigate = useNavigate();
  const currentUser = userAPI.getCurrentUser();

  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const onChangeAvatar = (e) => {
    const avatar = e.target.files[0];
    setAvatar(avatar);
  };

  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    userAPI
      .updateUserAvatar(avatar)
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
      <Form name="avatarUpdate" method="put" encType="multipart/form-data">
        {error && <div className="error_msg">{error}</div>}

        <Form.Item
          name="avatar"
          onChange={onChangeAvatar}
          // value={idImage}
        >
          <Upload name="avatar" type="file" htmlFor="file" listType="picture" >
            <Button>
              <EditOutlined /> Upload Avatar
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="update-form-button"
            onClick={handleAvatarUpdate}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AvatarUpdate;
