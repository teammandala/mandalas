import { Col, Row } from "antd";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import auction from "../../api/auction";
import Pagenotfound from "../../pages/pagenotfound";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  bidHistory: {
    marginTop: "20px",
    backgroundColor: "#f3f3f3",
    padding: "16px",
  },
  placeForm: {
    margin: "0px 16px 16px",
    backgroundColor: "#e7ede4",
    display: "inline-block",
  },
  marginInput: {
    margin: 16,
  },
  marginBtn: {
    margin: "8px 16px 16px",
  },
}));

const BiddingPage = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const id = useParams().id;

  const [bid, setBid] = useState("");

  useEffect(() => {
    auction
      .getCurrentAuction(id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Row>
      <Col>
        <h1>auctions bid</h1>
        <h2>{data.description}</h2>
        <div>
          <img
            className="bid-image"
            src={"http://localhost:8080/" + data.image}
            alt=""
          />
        </div>
        <div className="container-fluid">
          <>
            Item Name {}: {}{" "}
          </>
          {data.itemName}
          <br />
          <>
            Updated {}: {}{" "}
          </>
          {data.updated}
          <br />
          <>
            Starting Date {}: {}{" "}
          </>
          {data.bidStart}
          <br />
          <>
            Ending Date {}: {}{" "}
          </>
          {data.bidEnd}
          <br />
          <>
            Seller Name {}: {}{" "}
          </>
          {data.seller}
          <br />
          <>
            Starting Price {}: {}{" "}
          </>
          {data.startingBid}
        </div>
        <div>{data.bids}</div>
      </Col>

      <Col>
        <div className={classes.placeForm}>
          <TextField
            label="Your Bid ($)"
            // value={bid}
            type="number"
            margin="normal"
            helperText={`Enter $${Number(2) + 1} or more`}
            className={classes.marginInput}
          />
          <br />
          <Button
            variant="contained"
            className={classes.marginBtn}
            color="secondary"
          >
            Place Bid
          </Button>
          <br />
        </div>
        <div className={classes.bidHistory}>
          <Typography variant="h6">All Bids</Typography>
          <br />
          <Grid container spacing={8}>
            <Grid item xs={3} sm={3}>
              <Typography variant="subtitle1" color="primary">
                Bid Amount
              </Typography>
            </Grid>
            <Grid item xs={5} sm={5}>
              <Typography variant="subtitle1" color="primary">
                Bid Time
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="subtitle1" color="primary">
                Bidder
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Col>
    </Row>
  );
};

export default BiddingPage;
