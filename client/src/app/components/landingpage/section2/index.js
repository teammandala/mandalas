import React from 'react'
import './style.css'
import {Col, Row, Container} from "react-bootstrap"
import Carouselimage from '../carousel'


const Section2 = () => {
  return (
  <>
  <section className="s2">
    <Container>
      <Row className="lg-8 p-3">
        <Col  className='lg-8 p-3' >
          <Carouselimage />
        </Col>
        <Col lg="4" className="s2__des p-2">
          <h1>
            <span className="bold">Mandala</span>Find Your Interest
          </h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <ul className="s2__list">
            <li><i className="">&#707;</i>  creative arts</li>
            <li><i className="">&#707;</i>  antique Items</li>
            <li><i className="">&#707;</i>  Relics</li>
            <li><i className="">&#707;</i>  Limited Products</li>
            <li><i className="">&#707;</i>  Historical Products</li>
          </ul>
        </Col>
      </Row>
    </Container>
    
  </section></>
  )
}

export default Section2