import axios from "axios";

const API_URL = "http://localhost:8080/api/bid/";

const bidUpdate = (auction, bidder, bid) => {
  return axios.post(API_URL + "update/" + auction, {
    bidder,
    bid,
  });
};

export default {
  bidUpdate,
};
