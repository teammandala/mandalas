import React from 'react'
import './style.css'
import {Col, Row, Container} from "react-bootstrap"
import Carouselimage from '../carousel'


const Section2 = () => {
  return (
  <>
  <section className="s2">
    <Container>
      <Row className="flex-align ">
        <Col md="5" lg="3" className="s2__mob-pic container-fluid">
          <Carouselimage />
        </Col>
        <Col md="7" lg="5" className="s2__des">
          <h1>
            <span className="bold">Mandala</span>Find Your Interest
          </h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
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