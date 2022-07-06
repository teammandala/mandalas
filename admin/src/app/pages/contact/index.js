import React from "react";
import AllContact from "../../components/table/allContact/pending";
import ResolvedContact from "../../components/table/allContact/resolved";
import {Nav, Tab, Row, Col} from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="p-3">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Pending Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Resolved Contact</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AllContact />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ResolvedContact />
              </Tab.Pane>
              
            </Tab.Content>
            
          </Col>
        </Row>
      </Tab.Container>
    </div>

  );
};

export default Contact;
