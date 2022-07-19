import React, { useEffect, useState } from "react";
import user from "../../../api/user";
import auction from "../../../api/auction";
import { Image, Modal } from "antd";
import { Table, Button } from "react-bootstrap";
import moment from "moment";

const Ongoing = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const cuser = user.getCurrentUser();

    auction
      .getAuctionBySeller(cuser._id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const currentDate = new Date();
  

  

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
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            if(items.status === "approved"){
                if (
                    currentDate > new Date(items.bidStart) &&
                    currentDate < new Date(items.bidEnd)
                ){
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
                          <td>{moment(items.created).format("YYYY/MM/DD-HH:mm:ss")}</td>
                          <td>
                            {moment(items.bidStart).format("YYYY/MM/DD-HH:mm:ss")}
                          </td>{" "}
                          <td>{moment(items.bidEnd).format("YYYY/MM/DD-HH:mm:ss")}</td>
                          <td>{items.startingBid}</td>
                          <td><Button
                              type="primary"
                              block
                              href={`/auctionandbid/${items._id}`}
                            >
                              Watch Live
                            </Button></td>
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

export default Ongoing;
