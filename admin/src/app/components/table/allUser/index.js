import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Image } from "antd";
import user from "../../../api/user";

const AllUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    user
      .getAllUser()
      .then((res) => {
        const data = res.data.user;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="all-users">
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>avatar</th>
            <th>usename</th>
            <th>email</th>
            <th>phone</th>
            <th>name</th>
            <th>role</th>
            <th>address</th>
            <th>bio</th>
            <th>created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            return (
              <>
                <tr key={items._id}>
                  <td>{items._id}</td>
                  <td>
                    <Image
                      width={200}
                      src={"http://localhost:8080/" + items.avatar}
                    />
                    {/* <img src={"http://localhost:8080/" + items.id_image} alt="" /> */}
                  </td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.phone}</td>
                  <td>{items.name}</td>
                  <td>{items.role}</td>
                  <td>{items.address}</td>
                  <td>{items.bio}</td>
                  <td>{items.created}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUser;
