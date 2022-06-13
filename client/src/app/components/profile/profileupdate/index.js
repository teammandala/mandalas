import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../../api/user";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profileupdate = () => {
  const currentUser = user.getCurrentUser();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
  };

  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const onChangeAvatar = (e) => {
    const avagar = e.target.files[0];
    setAvatar(avatar);
  };

  return (
    <div className="container-fluid h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="card-body p-4">
          {/* <h6>Information</h6> */}
          <div className="row pt-1">
            <div className="col-10">
              <h6>Information</h6>
            </div>
            <div className="col-2">
              <Link to="/">
                <i class="fa fa-times" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <hr className="mt-0 mb-4" />
          <div className="row pt-1">
            <div className="col-6 mb-3">
              <h6>Full Name</h6>
              <input
                name="name"
                className="col-12"
                type={"text"}
                placeholder={currentUser.name}
                onChange={onChangeName}
                value={name}
              />
            </div>
            <div className="col-6 mb-3">
              <h6>Email</h6>
              <input
                name="email"
                className="col-12"
                type={"email"}
                placeholder={currentUser.email}
                onChange={onChangeEmail}
                value={email}
              />
            </div>
            <div className="col-6 mb-3">
              <h6>Phone</h6>
              <input
                name="phone"
                className="col-12"
                type={"number"}
                placeholder={currentUser.phone}
                onChange={onChangePhone}
                value={phone}
              />
            </div>

            <div className="col-6 mb-3">
              <h6>Address</h6>
              <input
                name="adreess"
                className="col-12"
                type={"text"}
                placeholder={currentUser.address}
                onChange={onChangeAddress}
                value={address}
              />
            </div>

            <div className="col-6 mb-3">
              <h6>Joined At</h6>
              <p className="text-muted">{currentUser.created}</p>
            </div>
            <div className="col-6 mb-3">
              <h6>Username</h6>
              <input
                name="username"
                className="col-12"
                type={"text"}
                placeholder={currentUser.username}
                onChange={onChangeUsername}
                value={username}
              />
            </div>
            <div className="col-12 mb-3">
              <h6>Bio</h6>
              <form>
                <textarea
                  placeholder={currentUser.bio}
                  name="bio"
                  onChange={onChangeBio}
                  value={bio}
                />
              </form>
            </div>
            <div className="col-12 mb-3">
              <h6>Profile Image</h6>
              <form>
                <Form.Control type="file" size="l" onChange={onChangeAvatar} />
              </form>
            </div>
          </div>

          <hr className="mt-0 mb-4" />
          <button type="button" className="btn btn-primary btn-block">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profileupdate;
