import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import carousel from '../../../api/carousel'

import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CarouselForm = () => {
    const navigate = useNavigate();


    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

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

      const handleCarouselRequest = (e) => {
        e.preventDefault();
        carousel
          .carouselRequest(
            itemName,
            description,
            image
          )
          .then((response) => {
            window.alert(
              response.data.message,
              navigate("/carousel"),
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
            <div className="carousel">
                <Form
                    name="carousel-form"
                    method="post"
                    initialValues={{ remember: true }}
                    encType="multipart/form-data"
                >
                    <p>Carousel Upload Form</p>
                    {/* {error && <div className="error_msg">{error}</div>} */}
                    <Form.Item
                        name="itemName"
                        rules={[{ required: true, message: "please enter Item Name!" }]}
                      onChange={onChangeItemName}
                      value={itemName}
                    >
                        <Input placeholder="Image Title" />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: "Please your item description!" }]}
                      onChange={onChangeDescription}
                      value={description}
                    >
                        <Input.TextArea placeholder="Add some Lines" />
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

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        onClick={handleCarouselRequest}
                        >
                            Upload Carousel
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </>

    )
}

export default CarouselForm