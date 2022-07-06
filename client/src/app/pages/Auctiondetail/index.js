import React from 'react'
import BiddingPage from '../../components/auctionbid'
import Auction from '../../components/auctionbid/auction'
import './style.css'

const AuctionBid = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='auctiondetail'>
        <BiddingPage />
        </div>
        </div>
    </>

  )
}
export default AuctionBid