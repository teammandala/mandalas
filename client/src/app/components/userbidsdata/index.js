import React, { useEffect, useState } from "react";
import user from "../../api/user";
import auction from "../../api/auction";
import { Image, Modal, Button } from "antd";
import { Table } from "react-bootstrap";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

const UserbidsData = () => {
  // const [data, setData] = useState([]);
  // const currentUser = user.getCurrentUser();
  // const username = useParams().username;

  // const [id, setId] = useState("");
  // const [isWinnerModalVisible, setIsWinnerModalVisible] = useState(false);

  // const [bidData, setBidData] = useState([]);
  // const showWinnerModal = (items) => {
  //   setId(items._id);

  //   setBidData(items.bids.sort().reverse());
  //   setIsWinnerModalVisible(true);
  // };

  // useEffect(() => {
  //   const cuser = user.getCurrentUser();

  //   auction
  //     .getAuctionBySeller(cuser._id)
  //     .then((res) => {
  //       const data = res.data.currentauctionData;
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // const currentDate = new Date();

  // const handleCancel = () => {
  //   setIsWinnerModalVisible(false);
  //   setIsWinnerModalVisible(false);
  // };

  // return (
  //   <>
    
  //     <Table
  //       responsive
  //       className="table_data"
  //       striped
  //       bordered
  //       hover
  //       size="sm"
  //       variant="dark"
  //     >
  //       <thead>
  //         <tr>
  //           <th>id</th>
  //           <th>Item Name</th>
  //           <th>Description</th>
  //           <th>Image</th>
  //           <th>requested Date</th>
  //           <th>Starting Time</th>
  //           <th>Ending Time</th>
  //           <th>starting Price</th>
  //           <th>Winner</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((items, index) => {
  //           if (items.status === "approved") {
  //             if (currentDate > new Date(items.bidEnd)) {
  //               // if (currentUser._id === items.bids.bidder._id) {
  //                 return (
  //                   <tr>
  //                     <td>{items._id}</td> <td>{items.itemName}</td>
  //                     <td>{items.description}</td>
  //                     <td>
  //                       <Image
  //                         width={200}
  //                         src={"http://localhost:8080/" + items.image}
  //                       />
  //                     </td>
  //                     <td>
  //                       {moment(items.created).format("YYYY/MM/DD-HH:mm:ss")}
  //                     </td>
  //                     <td>
  //                       {moment(items.bidStart).format("YYYY/MM/DD-HH:mm:ss")}
  //                     </td>{" "}
  //                     <td>
  //                       {moment(items.bidEnd).format("YYYY/MM/DD-HH:mm:ss")}
  //                     </td>
  //                     <td>{items.startingBid}</td>
  //                     <td>
  //                       {/* {items.bids.sort().reverse()[0].bidder.username}
  //                     <br />
  //                     {items.bids[0].bidder.email}
  //                     <br />
  //                     {items.bids[0].bidder.phone} */}
  //                       <Button onClick={() => showWinnerModal(items)}>
  //                         View Winner
  //                       </Button>
  //                       <Modal
  //                         title="Winner"
  //                         visible={isWinnerModalVisible}
  //                         onOk={handleCancel}
  //                         onCancel={handleCancel}
  //                       >
  //                         <p>
  //                           Winner:
  //                           {items.bids.sort().reverse()[0].bidder.username}
  //                         </p>
  //                         <p>
  //                           Email:
  //                           {items.bids[0].bidder.email}
  //                         </p>
  //                         <p>
  //                           Phone:
  //                           {items.bids[0].bidder.phone}
  //                         </p>
  //                       </Modal>
  //                     </td>
  //                   </tr>
  //                 );
  //               }

                
  //             }
  //           // }
  //         })}
  //       </tbody>
  //     </Table>
  //   </>
  // );
};

export default UserbidsData;