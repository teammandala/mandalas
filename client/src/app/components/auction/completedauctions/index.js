import React, { useEffect, useState } from "react";
import user from "../../../api/user";
import auction from "../../../api/auction";
import { Image, Modal, Button } from "antd";
import { Table } from "react-bootstrap";
import moment from "moment";

const Completedauctions = () => {
  const [data, setData] = useState([]);

  const [bidData, setBidData] = useState([]);

  const [id, setId] = useState("");
  const [isWinnerModalVisible, setIsWinnerModalVisible] = useState(false);

  const showWinnerModal = (items) => {
    setId(items._id);

    setBidData(items.bids.sort().reverse());
    setIsWinnerModalVisible(true);
  };

  useEffect(() => {
    const cuser = user.getCurrentUser();

    auction
      .getAuctionBySeller(cuser._id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        setBidData(data.bids);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const currentDate = new Date();

  const handleCancel = () => {
    setIsWinnerModalVisible(false);
    setIsWinnerModalVisible(false);
  };

  return (
    <>
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
            <th>Starting Time</th>
            <th>Ending Time</th>
            <th>starting Price</th>
            <th>Winner</th>
            <th>Contact Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, index) => {
            if (items.status === "approved") {
              if (currentDate > new Date(items.bidEnd)) {
                return (
                  <tr>
                    <td>{items._id}</td> <td>{items.itemName}</td>
                    <td>{items.description}</td>
                    <td>
                      <Image
                        width={200}
                        src={"http://localhost:8080/" + items.image}
                      />
                    </td>
                    <td>
                      {moment(items.created).format("YYYY/MM/DD-HH:mm:ss")}
                    </td>
                    <td>
                      {moment(items.bidStart).format("YYYY/MM/DD-HH:mm:ss")}
                    </td>{" "}
                    <td>
                      {moment(items.bidEnd).format("YYYY/MM/DD-HH:mm:ss")}
                    </td>
                    <td>{items.startingBid}</td>
                    <td>
                      {items.bids?.length > 0 ?(
                          <a>Username: {items.bids.sort().reverse()[0].bidder.username}
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
                          Won By Rs: {items.bids[0].bid}</a>
                        ):(
                          <a>No Bids</a>
                        )}
                      
                      
                    </td>

                    <td>{items.usercontactstatus}</td>
                    <td>
                      <Button onClick={() => showWinnerModal(items)}>
                        Contact
                      </Button>
                      <Modal
                        title="Contact"
                        visible={isWinnerModalVisible}
                        onOk={handleCancel}
                        onCancel={handleCancel}
                      >
                        <p>
                          Click Ok button if you have contacted the winner
                          <br />
                          This Process is not reversible
                        </p>
                      </Modal>
                    </td>
                  </tr>
                );
              }
            }
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Completedauctions;
