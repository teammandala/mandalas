import React, { useState, useEffect } from "react";
import { Table,Row } from "react-bootstrap";
import { Image, Modal, Button } from "antd";
import kyc from "../../../api/kycrequest";
import user from "../../../api/user";

const KycrequestTable = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [kycId, setKYCId] = useState("");
  const [isApproveModalVisible, setIsApproveModalVisible] = useState(false);
  const [isRejectModalVisible, setIsRejectModalVisible] = useState(false);
  const [isAdminModalVisible, setIsAdminModalVisible] = useState(false);

  useEffect(() => {
    kyc
      .getKycData()
      .then((res) => {
        const data = res.data.kycData;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showApproveModal = (items) => {
    setKYCId(items._id);
    setId(items.user);
    setIsApproveModalVisible(true);
  };

  const handleApprove = () => {
    // console.log(id);
    setIsApproveModalVisible(false);
    const status = "auctioneer";
    const role = "AUCTIONEER";
    kyc
      .kycStatus(kycId, status)
      .then((res) => {
        window.alert(
          res.data.message,
          user.kycApprove(id, role),
          window.location.reload()
        );
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

  const showRejectModal = (items) => {
    setKYCId(items._id);
    setId(items.user);
    setIsRejectModalVisible(true);
  };

  const handleReject = () => {
    // console.log(id);
    setIsRejectModalVisible(false);
    const status = "rejected";
    const role = "USER";
    kyc
      .kycStatus(kycId, status)
      .then((res) => {
        window.alert(
          res.data.message,
          user.kycApprove(id, role),
          window.location.reload()
        );
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


  const showAdminModel = (items) => {
    setKYCId(items._id);
    setId(items.user);
    setIsAdminModalVisible(true);
  };
  const handleAdmin = () => {
    // console.log(id);
    setIsAdminModalVisible(false);
    const status = "admin";
    const role = "ADMIN";
    kyc
      .kycStatus(kycId, status)
      .then((res) => {
        window.alert(
          res.data.message,
          user.kycApprove(id, role),
          window.location.reload()
        );
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


  const handleCancel = () => {
    setIsApproveModalVisible(false);
  };

  return (
    <div>
      <Table responsive variant="dark" striped bordered hover>
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
          {data.map((items, index) => {
            return (
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
                      src={"http://localhost:8080/" + items.idImage}
                    />
                  </td>
                  <td>{items.user}</td>
                  <td>{items.status}</td>
                  <td>{items.reqDate}</td>
                  <td>
                    <Row>
                    <Button
                      type="primary"
                      onClick={() => showApproveModal(items)}
                      block>
                      Make Auctioneer
                    </Button>
                    <Modal
                      title="Are You Sure!"
                      visible={isApproveModalVisible}
                      onOk={handleApprove}
                      onCancel={handleCancel}
                    >
                      <p>Are you sure you want to change user's role to Auctioneer? </p>
                    </Modal>
                    </Row>
                    <Row p={2}>
                    <Button
                      type=""
                      onClick={() => showRejectModal(items)}
                      block>
                      Make User
                    </Button>
                    <Modal
                      title="Are You Sure!"
                      visible={isRejectModalVisible}
                      onOk={handleReject}
                      onCancel={handleCancel}
                    >
                      <p>Are you sure you want to Reject this KYC </p>
                    </Modal>
                    </Row>
                    <Row>
                    <Button
                      type="danger"
                      onClick={() => showAdminModel(items)}
                      block>
                      Make Admin
                    </Button>
                    <Modal
                      title="Are You Sure!"
                      visible={isAdminModalVisible}
                      onOk={handleAdmin}
                      onCancel={handleCancel}
                    >
                      <p>Are you sure you want to Make this User Admin? </p>
                    </Modal>
                    </Row>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default KycrequestTable;
