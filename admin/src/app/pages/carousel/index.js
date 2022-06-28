import React from 'react'

import {Nav, Tab, Row, Col,} from'react-bootstrap'
import CarouselForm from '../../components/forms/carouselform'
import AllCarousel from '../../components/table/carousel'

const Carouseldetails = () => {
  return (
    <>
    <div  className='container-fluid'>
              <div className="auctioneer">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="p-3">
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">All Carousels</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Add Carousel</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <AllCarousel />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <CarouselForm />
                        </Tab.Pane>
                      </Tab.Content>
                      
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
    </>
    
  )
}

export default Carouseldetails