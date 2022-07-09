import React from 'react';
import './style.css';
import Common from './common.jsx'
import web from '../../../components/media/auction.png'

const Section = () => {
  return (
    <>
       <Common
        name="About"
        imgsrc={web}
        visit="/about"
        btname="About Us"
      />
    </>
  )
}

export default Section