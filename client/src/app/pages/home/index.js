import React from "react";
import Section from "../../components/landingpage/section";
import Section2 from "../../components/landingpage/section2";
import {Tab, Tabs} from 'react-bootstrap'
import Liveauctions from "../../components/allauctions/liveAuction";
import Pastauctions from "../../components/allauctions/pastAuction";
import Upcomingauctions from "../../components/allauctions/upcommingauctions";
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Section />
          <Section2 />
        </div>
        <div className="container-fluid">
        <Tabs defaultActiveKey="Live_Auctions" id="uncontrolled-tab-example" className="nav mb-3 nav-pills justify-content-center p-2">
              
              <Tab  class='tab-text' data-toogle="pill" eventKey="Past_Auctions" title={<h5>Past Auctions</h5>}>
              <Pastauctions />
              </Tab>


              <Tab class='tab-text' data-toogle="pill" eventKey="Live_Auctions" title={<h5>Live Auctions</h5>}>
                <Liveauctions />
              </Tab>


              <Tab class='tab-text' data-toogle="pill" eventKey="Upcomming_Auctions" title={<h5>Future Auctions</h5>}>
                <Upcomingauctions />
              </Tab>


            </Tabs>

        </div>


      </>
    );
  }
}

export default Home;
