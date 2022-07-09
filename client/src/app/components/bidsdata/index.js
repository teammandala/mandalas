import React, { useState, useEffect } from "react";
import auction from "../../api/auction";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./style.css";

const Bidsdata = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const interval = setInterval(
      () =>
        auction
          .getCurrentAuction(id)
          .then((res) => {
            const data = res.data.currentauctionData;
            setData(data.bids.sort().reverse());
            // console.log(data);
          })
          .catch((error) => {
            console.log(error);
          }),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div class="text1"> Bidding History</div>
      <Table responsive stripped borderes hover varient="dark">
        <thead>
          <tr>
            <th>Bidder</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
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
