import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Image, Button, Modal } from "antd";
import auction from "../../../../api/auction";
import "./style.css";
import moment from "moment";
const AuctionRequestTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isApproveModalVisible, setIsApproveModalVisible] = useState(false);
  const [isRejectModalVisible, setIsRejectModalVisible] = useState(false);

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
  
  const showApproveModal = (items) => {
    setId(items._id);
    setIsApproveModalVisible(true);
  };

  const handleApprove = () => {
    // console.log(id);
    setIsApproveModalVisible(false);
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
  };

  const showRejectModal = (items) => {
    setId(items._id);
    setIsRejectModalVisible(true);
  };

  const handleReject = () => {
    setIsRejectModalVisible(false);
    const status = "rejected";
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
    setIsApproveModalVisible(false);
    setIsRejectModalVisible(false);
  };
  

  
  return (
    <><div class='text1'>Auction</div>
      <Table
        responsive
        className="table_data"
        striped
        bordered
        hover
        size="sm"
        variant="dark"
      >
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
            <th>User Contact</th>
            <th>Delivery Status</th>
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
                  <td>{moment(items.created).format("YYYY/MM/DD-HH:MM:SS")}</td>
                  <td>{moment(items.bidStart).format("YYYY/MM/DD-HH:MM:SS")}</td>
                  <td>{moment(items.bidEnd).format("YYYY/MM/DD-HH:MM:SS")}</td>
                  <td>{items.seller.name}</td>
                  <td>{items.startingBid}</td>
                  <td>{items.status}</td>
                  <td>{items.usercontactstatus}</td>
                  <td>{items.deliverystatus}</td>
                  <td>
                    <Button
                      type="primary"
                      onClick={() => showApproveModal(items)}
                    >
                      Approve
                    </Button>
                    <Modal
                      title="Are You Sure!"
                      visible={isApproveModalVisible}
                      onOk={handleApprove}
                      onCancel={handleCancel}
                    >
                      <p>Are you sure you want to approve this Auction </p>
                    </Modal>

                    <Button
                      type="danger"
                      onClick={() => showRejectModal(items)}
                    >
                      Reject
                    </Button>
                    <Modal
                      title="Are You Sure!"
                      visible={isRejectModalVisible}
                      onOk={handleReject}
                      onCancel={handleCancel}
                    >
                      <p>Are you sure you want to Reject this Auction </p>
                    </Modal>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default AuctionRequestTable;
