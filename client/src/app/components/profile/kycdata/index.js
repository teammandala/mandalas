import React, { useEffect, useState } from "react";
import kyc from "../../../api/kyc";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import user from "../../../api/user";
import Noaccess from "../../../pages/noaccess";

const KycData = () => {
  const [data, setData] = useState([]);
  const id = useParams().id;
  const navigate = useNavigate();
  const currentUser = user.getCurrentUser();
  
  const username = useParams().username;

  useEffect(() => {
    kyc
      .getCurrentKyc(id)
      .then((res) => {
        const data = res.data.isKYCAvailable;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
      {(() => {
        if (currentUser && currentUser.username === username) {
          return (
        <div className="container-fluid p-4 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card kycdata">
              <div className="col-md-12">
                <Button onClick={() => navigate(-1)}>Return to profile</Button>
              </div>
              <div className="card-body ">
                <h6>Kyc Information </h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>FullName</h6>
                    <p className="text-muted">{data.fullName}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{data.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{data.phone}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Address</h6>
                    <p className="text-muted">{data.address}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>KYC Requested</h6>
                    <p className="text-muted">{data.reqDate}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>KYC Status</h6>
                    <p className="text-muted">{data.status}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Country </h6>
                    <p className="text-muted">{data.country}</p>
                  </div>
                  <h6 className="col-6 mb-3">
                    Wanted to be auctioneer? <Link to="/kyc">Click Me</Link>
                  </h6>
                </div>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>ID Image</h6>
                    <img
                            src={"http://localhost:8080/" + data.idImage}
                            alt="Avatar"
                            className=" img-fluid my-5 avatar-img"
                          />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>);
        } else {
          return (
            <div className="no-access">
              <Noaccess/>
            </div>
          );
        }
      })()}
      </div>
    </>
  );
};

export default KycData;
