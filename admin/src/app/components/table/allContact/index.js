import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Modal, Button } from "antd";
import contact from "../../../api/contact";

const AllContact = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);


  useEffect(() => {
    contact
      .getAllContact()
      .then((res) => {
        const data = res.data.contact;
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

  // const handleDelete = () => {
  //   setIsDeleteModalVisible(false);
  //   // console.log(id)
  //   contact
  //     .contactDelete(id)
  //     .then((res) => {
  //       window.alert(res.data.message, window.location.reload());
  //     })
  //     .catch((error) => {
  //       if (
  //         error.response &&
  //         error.response.status >= 400 &&
  //         error.response.status <= 500
  //       ) {
  //         window.alert(error.response.data.message);
  //       }
  //     });
  //   // .console.log(id)
  // };



  return (
    <div className="all-contacts">
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>email</th>
            <th>message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            return (
              <>
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>{items.fullName}</td>
                  <td>{items.email}</td>
                  <td>{items.message}</td>
                  <td>{items.status}</td>
                  <td>
                  <Button type="danger" onClick={() => showDeleteModal(items)}>
                    Delete
                  </Button>
                  <Modal
                    title="Are You Sure!!!"
                    visible={isDeleteModalVisible}
                    onCancel={handleCancel}
                    // onOk={handleDelete}
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

export default AllContact;
