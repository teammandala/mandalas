import React, { useState, useEffect } from "react";
import auction from "../../api/auction";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const Bidsdata = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    auction
      .getCurrentAuction(id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data.bids);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Table responsive stripped borderes hover varient="dark">
        <thead>
          <tr>
            <th>Bidder</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          {/* <td>sagar prasad chaulagain</td>
          <td>2000</td> */}
          {data.map((datas) => {
            return (
              <>
                <tr>
                  <td>{datas.bidder.username}</td>
                  <td>{datas.bid}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Bidsdata;