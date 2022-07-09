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
        visit="/contact"
        btname="Contact Us"
      />
    </>
  )
}

export default Section