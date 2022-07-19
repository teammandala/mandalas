import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Image, Button, Modal } from "antd";
import auction from "../../../../api/auction";
// import "./style.css";
import moment from "moment";
const CompletedAuction = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isPackedModalVisible, setIsPackedModalVisible] = useState(false);
  const [isShippedModalVisible, setIsShippedModalVisible] = useState(false);
  const [isDeliveredModalVisible, setIsDeliveredModalVisible] = useState(false);
  const [isCancelledModalVisible, setIsCancelledModalVisible] = useState(false);

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
  const currentDate = new Date();

  const showPackedModal = (items) => {
    setId(items._id);
    setIsPackedModalVisible(true);
  };

  const showShippedModal = (items) => {
    setId(items._id);
    setIsShippedModalVisible(true);
  };

  const showDeliveredModal = (items) => {
    setId(items._id);
    setIsDeliveredModalVisible(true);
  };

  const showCancelledModal = (items) => {
    setId(items._id);
    setIsCancelledModalVisible(true);
  };

  const handleCancel = () => {
    setIsPackedModalVisible(false);
    setIsShippedModalVisible(false);
    setIsDeliveredModalVisible(false);
    setIsCancelledModalVisible(false);
  };

  const handlePacked = () => {
    setIsPackedModalVisible(false);
    const deliverystatus = "packed";
    auction
      .auctiondeliveryStatus(id, deliverystatus)
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

  const handleShipped = () => {
    setIsShippedModalVisible(false);
    const deliverystatus = "shipped";
    auction
      .auctiondeliveryStatus(id, deliverystatus)
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

  const handleDelivered = () => {
    setIsDeliveredModalVisible(false);
    const deliverystatus = "delivered";
    auction

      .auctiondeliveryStatus(id, deliverystatus)
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

  const handleCancelled = () => {
    setIsCancelledModalVisible(false);
    const status = "cancelled";
    auction
      .auctiondeliveryStatus(id, status)
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

  return (
    <>
      <div class="text1">Auction Requests </div>
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
            <th>Winner</th>
            <th>Winner Contact Status</th>
            <th>Delivery Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((items, index) => {
            if (items.status === "approved") {
              if (currentDate > new Date(items.bidEnd)) {
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
                      <td>
                        {moment(items.created).format("YYYY/MM/DD-HH:mm:ss")}
                      </td>
                      <td>
                        {moment(items.bidStart).format("YYYY/MM/DD-HH:mm:ss")}
                      </td>
                      <td>
                        {moment(items.bidEnd).format("YYYY/MM/DD-HH:mm:ss")}
                      </td>
                      <td>
                        Name: {items.seller.name} <br />{" "}
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={() =>
                            (window.location = `mailto:${items.seller.email}`)
                          }
                        >
                          Click Send E-Mail: {items.seller.email}
                        </Button>{" "}
                        <br /> Phone: {items.seller.phone}
                      </td>
                      <td>
                        {items.bids?.length > 0 ? (
                          <a>
                            Username:{" "}
                            {items.bids.sort().reverse()[0].bidder.username}
                            <br />
                            <Button
                              type="primary"
                              htmlType="submit"
                              onClick={() =>
                                (window.location = `mailto:${items.bids[0].bidder.email}`)
                              }
                            >
                              Click Send E-Mail: {items.bids[0].bidder.email}
                            </Button>
                            <br />
                            Phone: {items.bids[0].bidder.phone}
                            <br />
                            Full Name: {items.bids[0].bidder.name}
                            <br />
                            Won By Rs: {items.bids[0].bid}
                          </a>
                        ) : (
                          <a>No Bids</a>
                        )}
                      </td>
                      <td>{items.usercontactstatus}</td>
                      <td>{items.deliverystatus}</td>
                      <td>
                        <Button
                          onClick={() => showPackedModal(items)}
                          type="secndary"
                        >
                          Packed & shipped
                        </Button>
                        <Modal
                          title="Packed & shipped"
                          visible={isPackedModalVisible}
                          onOk={handlePacked}
                          onCancel={handleCancel}
                        >
                          <p>click ok if you have packed</p>
                        </Modal>

                        <Button
                          onClick={() => showShippedModal(items)}
                          type="primary"
                        >
                          Shipped
                        </Button>
                        <Modal
                          title="Shipped"
                          visible={isShippedModalVisible}
                          onOk={handleShipped}
                          onCancel={handleCancel}
                        >
                          <p>click ok if you have shipped</p>
                        </Modal>

                        <Button
                          onClick={() => showDeliveredModal(items)}
                          type="danger"
                        >
                          Delivered
                        </Button>
                        <Modal
                          title="Delivered"
                          visible={isDeliveredModalVisible}
                          onOk={handleDelivered}
                          onCancel={handleCancel}
                        >
                          <p>click ok if you have delivered</p>
                        </Modal>

                        <Button
                          onClick={() => showCancelledModal(items)}
                          type="ghost"
                        >
                          Cancelled
                        </Button>
                        <Modal
                          title="Cancelled"
                          visible={isCancelledModalVisible}
                          onOk={handleCancelled}
                          onCancel={handleCancel}
                        >
                          <p>click ok if you have cancelled</p>
                        </Modal>
                      </td>
                    </tr>
                  </>
                );
              } else {
                return <></>;
              }
            }
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CompletedAuction;
