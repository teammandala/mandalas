import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Image, Modal, Button } from "antd";
import user from "../../../api/user";

const AllUser = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);


  useEffect(() => {
    user
      .getAllUser()
      .then((res) => {
        const data = res.data.user;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showDeleteModal = (items) => {
    setId(items._id);
    // console.log(items._id);
    setIsDeleteModalVisible(true);
  };
  const handleCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    setIsDeleteModalVisible(false);
    // console.log(id)
    user
      .userDelete(id)
      .then((res) => {
        window.alert(res.data.message, window.location.reload());
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          window.alert(error.response.data.message);
        }
      });
    // .console.log(id)
  };



  return (
    <div className="all-users">
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>avatar</th>
            <th>usename</th>
            <th>email</th>
            <th>phone</th>
            <th>name</th>
            <th>role</th>
            <th>address</th>
            <th>bio</th>
            <th>created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            return (
              <>
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>
                    <Image
                      width={200}
                      src={"http://localhost:8080/" + items.avatar}
                    />
                    {/* <img src={"http://localhost:8080/" + items.id_image} alt="" /> */}
                  </td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.phone}</td>
                  <td>{items.name}</td>
                  <td>{items.role}</td>
                  <td>{items.address}</td>
                  <td>{items.bio}</td>
                  <td>{items.created}</td>
                  <td>
                  <Button type="danger" onClick={() => showDeleteModal(items)}>
                    Delete
                  </Button>
                  <Modal
                    title="Are You Sure!!!"
                    visible={isDeleteModalVisible}
                    onCancel={handleCancel}
                    onOk={handleDelete}
                  ></Modal>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUser;
