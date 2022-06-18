import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Image, Button, Modal } from "antd";
import auction from "../../../api/auction";

const AuctionRequestTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    auction
      .getAuctionData()
      .then((res) => {
        const data = res.data.auctionData;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showModal = (items) => {
    setId(items._id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // console.log(id);
    setIsModalVisible(false);
    const status = "approved";
    auction
      .auctionStatus(id, status)
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

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="auction-request">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>requested Date</th>
              <th>bidStart</th>
              <th>bidEnd</th>
              <th>seller</th>
              <th>startingBid</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((items, index) => {
              return (
                <>
                  <tr key={items._id}>
                    <td>{items._id}</td>
                    <td>{items.itemName}</td>
                    <td>{items.description}</td>
                    <td>
                      <Image
                        width={200}
                        src={"http://localhost:8080/" + items.image}
                      />
                      {/* <img src={"http://localhost:8080/" + items.id_image} alt="" /> */}
                    </td>
                    <td>{items.created}</td>
                    <td>{items.bidStart}</td>
                    <td>{items.bidEnd}</td>
                    <td>{items.seller}</td>
                    <td>{items.startingBid}</td>
                    <td>{items.status}</td>
                    <td>
                      <Button type="primary" onClick={() => showModal(items)}>
                        Approve
                      </Button>
                      <Modal
                        title="Are You Sure!"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <p>Are you sure you want to approve this Auction </p>
                      </Modal>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AuctionRequestTable;
