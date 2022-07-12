import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Modal, Button } from "antd";
import moment from "moment";
import contact from "../../../../api/contact";

const PendingContact = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isSolvedModalVisible, setIsSolvedModalVisible] = useState(false);

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

  const showSolvedModal = (items) => {
    setId(items._id);
    // console.log(items._id);
    setIsSolvedModalVisible(true);
  };
  const handleCancel = () => {
    setIsSolvedModalVisible(false);
  };

  const handleSolved = () => {
    setIsSolvedModalVisible(false);
    const status = "resolved";
    contact
      .contactStatus(id, status)
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
    // window.location.reload();
  };
  // };

  return (
    <>
      <div class="text1"> Contact</div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>full name</th>
            <th>email</th>
            <th>message/problem</th>
            <th>Status</th>
            <th>Contacted Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            if(items.status === "pending"){
            
            return (
              <>
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>{items.fullName}</td>
                  <td>
                    <Button
                      type="secondary"
                      htmlType="submit"
                      onClick={() =>
                        (window.location = `mailto:${items.email}`)
                      }
                    >
                      Send E-Mail to: {items.email}
                    </Button>
                  </td>
                  <td>{items.message}</td>
                  <td>{items.status}</td>
                  <td>
                    {moment(items.requested).format("YYYY/MM/DD-HH:MM:SS")}
                  </td>
                  <td>
                    <Button
                      type="primary"
                      onClick={() => showSolvedModal(items)}
                      block
                    >
                      Solve
                    </Button>
                    <Modal
                      title="Are You Sure!!!"
                      visible={isSolvedModalVisible}
                      onCancel={handleCancel}
                      onOk={handleSolved}
                    >
                      <p>This Action can be undone. Work Wisely</p>
                    </Modal>
                  </td>
                </tr>
              </>
            );
                    }
          })}
        </tbody>
      </Table>
    </>
  );
};

export default PendingContact;
