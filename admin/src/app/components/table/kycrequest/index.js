import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Image, Modal, Button } from "antd";
import kyc from "../../../api/kycrequest"

const KycrequestTable = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    kyc
    .getKycData()
    .then((res)=>{
      const data = res.data.kycData;
      setData(data);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[])

  return (
    <div>
      <Table responsive variant="dark" striped bordered hover >
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Contact</th>
            <th>E-mail</th>
              <th>Address</th>
              <th>Country</th>
              <th>ID Image</th>
              <th>Requested By</th>
              <th>Status</th>
              <th>Requested Date</th>
              <th>Action</th>
              
          </tr>
        </thead>
        <tbody>
          {data.map((items, index)=>{
            return(
              <>
              <tr key={items._id}>
                <td>{items._id}</td>
                <td>{items.fullName}</td>
                <td>{items.phone}</td>
                <td>{items.email}</td>
                <td>{items.address}</td>
                <td>{items.country}</td>
                <td>
                  <Image 
                  width={200}
                  src={"http://localhost:8080/"+items.idImage}/>
                </td>
                <td>{items.user}</td>
                <td>{items.status}</td>
                <td>{items.reqDate}</td>
                <td>
                <Button
                        type="primary"
                        // onClick={() => showApproveModal(items)}
                      >
                        Approve
                      </Button>
                      <Modal
                        title="Are You Sure!"
                      >
                        <p>Are you sure you want to approve this Auction </p>
                      </Modal>

                      <Button
                        type="danger"
                        // onClick={() => showRejectModal(items)}
                      >
                        Reject
                      </Button>
                      <Modal
                        title="Are You Sure!"
                        
                      >
                        <p>Are you sure you want to Reject this Request to be Auctioneer </p>
                      </Modal>
                </td>

  
                

              </tr>
              </>
            )
          })}
        </tbody>

      </Table>
    </div>
  )
}

export default KycrequestTable