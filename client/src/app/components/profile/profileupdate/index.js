import React from 'react'
import { Link } from "react-router-dom";
import user from "../../../api/user";
import { Form } from 'react-bootstrap'

const Profileupdate = () => {
    const currentUser = user.getCurrentUser();


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
                                className="col-12"
                                type={"text"}
                                placeholder={currentUser.name}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <input
                                className="col-12"
                                type={"email"}
                                placeholder={currentUser.email}
                            />
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <input
                                className="col-12"
                                type={"number"}
                                placeholder={currentUser.phone}
                            />
                        </div>

                        <div className="col-6 mb-3">
                            <h6>Address</h6>
                            <input
                                className="col-12"
                                type={"text"}
                                placeholder={currentUser.address}
                            />
                        </div>


                        <div className="col-6 mb-3">
                            <h6>Joined At</h6>
                            <p className="text-muted">{currentUser.created}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Username</h6>
                            <p className="text-muted">{currentUser.username}</p>
                        </div>
                        <div className="col-12 mb-3">
                            <h6>Bio</h6>
                            <form>
                                <textarea placeholder={currentUser.bio} />

                            </form>
                        </div>
                        <div className="col-12 mb-3">
                            <h6>Profile Image</h6>
                            <form>
                                <Form.Control type="file" size="l" />
                            </form>
                        </div>
                    </div>

                    <hr className="mt-0 mb-4" />
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Profileupdate