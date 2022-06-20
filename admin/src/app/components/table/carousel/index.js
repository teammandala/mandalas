import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Image, Button, Modal } from "antd";

import carousel from "../../../api/carousel";


const AllCarousel = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    carousel
      .getCarouselData()
      .then((res) => {
        const data = res.data.carouselData;
        setData(data);
        console.log(data)
      })
      .catch((error) => {
      });
      
  }, []);


  return (
    <div className='container-fluid'>
      <Table responsive className="table_data" striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Image
                width={200}
                src={''} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AllCarousel