import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Image, Button, Modal } from "antd";

import carousel from "../../../api/carousel";


const AllCarousel = () => {


  const [data, setData] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  useEffect(() => {
    carousel
      .getCarouselData()
      .then((res) => {
        const data = res.data.carouselData;
        setData(data);
      })
      .catch((error) => {
      });
      
  }, []);

  const showDeleteModal=()=>{
    setIsDeleteModalVisible(true);
  };
  const handleCancel = () => {
    setIsDeleteModalVisible(false);
  };


  return (
    <div className='container-fluid'>
      <Table responsive className="table_data" striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index)=>{
            return(
              <tr key={items._id}>
            <td>{items._id}</td>
            <td>{items.itemName}</td>
            <td>{items.description}</td>
            <td>
              <Image
                width={200}
                src={"http://localhost:8080/" + items.image} />
            </td>
            <td>
              <Button type='danger'
              onClick={()=>showDeleteModal()}>
                Delete
              </Button>
              <Modal title="Are You Sure!!!"
              visible={isDeleteModalVisible}
              onCancel={handleCancel}>

              </Modal>

            </td>
          </tr>
            )
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default AllCarousel