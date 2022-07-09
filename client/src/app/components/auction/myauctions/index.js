import React, { useEffect, useState } from "react";
import user from "../../../api/user";
import auction from "../../../api/auction";
import { Image, Modal } from "antd";
import { Table } from "react-bootstrap";
import moment from "moment";

const Myauctions = () => {
  const [data, setData] = useState([]);

  const [id, setId] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const showDeleteModal = (items) => {
    setId(items._id);
    setIsDeleteModalVisible(true);
  };

  useEffect(() => {
    const cuser = user.getCurrentUser();

    auction
      .getAuctionBySeller(cuser._id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleCancel = () => {
    setIsDeleteModalVisible(false);
    setIsDeleteModalVisible(false);
  };

  const handleDelete = () => {
    setIsDeleteModalVisible(false);
    auction
      .auctionDelete(id)
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
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
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
                <td>{moment(items.created).format("YYYY/MM/DD-HH:MM:SS")}</td>
                <td>
                  {moment(items.bidStart).format("YYYY/MM/DD-HH:MM:SS")}
                </td>{" "}
                <td>{moment(items.bidEnd).format("YYYY/MM/DD-HH:MM:SS")}</td>
                <td>{items.startingBid}</td> <td>{items.status}</td>
                <td>
                  {(() => {
                    if (items.status === "pending") {
                      return (
                        <button
                          className="btn btn-primary"
                          onClick={() => showDeleteModal(items)}
                        >
                          Delete
                        </button>
                      );
                    } else {
                      return (
                        <button className="btn btn-secondary" type="disabled">
                          Delete
                        </button>
                      );
                    }
                  })()}
                  <Modal
                    title="Are You Sure!"
                    visible={isDeleteModalVisible}
                    onOk={handleDelete}
                    onCancel={handleCancel}
                  >
                    <p>Are you sure to Delete this Auction </p>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Myauctions;
