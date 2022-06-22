
import useItems from 'antd/lib/menu/hooks/useItems';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import auction from '../../api/auction'

const BiddingPage = () => {

    // const id = useParams().id;
    
  const [data, setData] = useState([]);
    const items = auction.getApprovedAuctionData();

    useEffect(() => {
        auction
          .getApprovedAuctionData()
          .then((res) => {
            const data = res.data.auctionData;
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      

  return (
    <div className='container-fluid'>
        <h1>{items._id}</h1>
        <img src={"http://localhost:8080/" + items.image} alt="" />
    </div>
  )
}

export default BiddingPage