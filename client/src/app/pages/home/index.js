import React from "react";
import Section from "../../components/landingpage/section";
import Section2 from "../../components/landingpage/section2";
import {Tab, Tabs} from 'react-bootstrap'
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="cntainer-fluid">
          <Section />
          <Section2 />
        </div>
        <div className="container-fluid">
        <Tabs defaultActiveKey="Live_Auctions" id="uncontrolled-tab-example" className="nav mb-3 nav-pills justify-content-center p-2">
              
              <Tab  class='tab-text' data-toogle="pill" eventKey="Past_Auctions" title="Past Auctions">
              <h1>Past Auctions will be here</h1>
              </Tab>


              <Tab class='tab-text' data-toogle="pill" eventKey="Live_Auctions" title="Live Auctions">
                <h1>Ongoing Auctions will be here</h1>
              </Tab>


              <Tab class='tab-text' data-toogle="pill" eventKey="Upcomming_Auctions" title="Upcomming Auctions">
                <h1>Future Auctions will be here</h1>
              </Tab>


            </Tabs>

        </div>


      </>
    );
  }
}

export default Home;
