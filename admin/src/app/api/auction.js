import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auction/";

const token = localStorage.getItem("token");

//get all auction data
const getAuctionData = async () => {
  const res = await axios.get(API_URL + "getdata");
  return res;
};

export default {
  getAuctionData,
};
