import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';


const Section = () => {
  return (
    <section className="s1">
      <Container>
        <Row className='bgimage'>
          <Col md="12" className="text-center s1-intro p-2">
            <h1>Own Your Interest</h1>
            <h3>We are for all people who loves Rare Collection</h3>
            
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <h3>Introducing Auction</h3>
            
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <a href="*">read more</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            
            <h3>User friendly Interface</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <a href="*">read more</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            
            <h3>Items Every-One Loves </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <a href="*">read more</a>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

export default Section