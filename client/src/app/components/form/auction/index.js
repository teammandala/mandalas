import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./style.css";
import userAPI from "../../../api/user";
import auction from "../../../api/auction";

const AuctionForm = () => {
  const navigate = useNavigate();
  const currentUser = userAPI.getCurrentUser();
  const seller = currentUser._id;

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [bidStart, setBidStart] = useState("");
  const [bidEnd, setBidEnd] = useState("");
  const [startingBid, setStartingBid] = useState("");

  const onChangeItemName = (e) => {
    const itemName = e.target.value;
    setItemName(itemName);
  };
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };
  const onChangeImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };
  const onChangeBidStart = (e) => {
    const bidStart = e.target.value;
    setBidStart(bidStart);
  };
  const onChangeBidEnd = (e) => {
    const bidEnd = e.target.value;
    setBidEnd(bidEnd);
  };
  const onChangeStartingBid = (e) => {
    const startingBid = e.target.value;
    setStartingBid(startingBid);
  };

  const handleAuctionRequest = (e) => {
    e.preventDefault();
    auction
      .auctionRequest(
        itemName,
        description,
        image,
        bidStart,
        bidEnd,
        seller,
        startingBid
      )
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
        name="auction-form"
        method="post"
        initialValues={{ remember: true }}
        encType="multipart/form-data"
      >
        <p className="form-title">Mandala</p>
        <p>Auction Request Form</p>
        {/* {error && <div className="error_msg">{error}</div>} */}
        <Form.Item
          name="itemName"
          rules={[{ required: true, message: "please enter Item Name!" }]}
          onChange={onChangeItemName}
          value={itemName}
        >
          <Input placeholder="Item Name" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please your item description!" }]}
          onChange={onChangeDescription}
          value={description}
        >
          <Input.TextArea placeholder="item description" />
        </Form.Item>

        <Form.Item
          name="image"
          rules={[
            { required: true, message: "Please upload your item image!" },
          ]}
          onChange={onChangeImage}
          // value={idImage}
        >
          <Upload name="image" type="file" htmlFor="file" listType="picture">
            <Button>
              <UploadOutlined /> Click to upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="bidStart"
          rules={[
            { required: true, message: "Please select your auction start!" },
          ]}
          onChange={onChangeBidStart}
          value={bidStart}
        >
          <Input type="datetime-local" />
        </Form.Item>

        <Form.Item
          name="bidEnd"
          rules={[
            { required: true, message: "Please select your auction end date!" },
          ]}
          onChange={onChangeBidEnd}
          value={bidEnd}
        >
          <Input type="datetime-local" />
        </Form.Item>

        <Form.Item
          name="startingBid"
          rules={[
            {
              required: true,
              message: "Please input your auction starting bid!",
            },
          ]}
          onChange={onChangeStartingBid}
          value={startingBid}
        >
          <InputNumber addonBefore="Rs" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleAuctionRequest}
          >
            Request
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AuctionForm;
