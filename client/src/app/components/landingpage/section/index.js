import React from 'react';
import Common from './common.jsx'
import web from '../../../components/media/auction.png'

const Section = () => {
  return (
    <>
       <Common
        name="Welcome to"
        imgsrc={web}
        visit="/about"
        btname="Know More"
      />
    </>
  )
}

export default Section