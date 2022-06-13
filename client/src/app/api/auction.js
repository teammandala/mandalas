import axios from "axios";

const API_URL = "http://localhost:8080/api/auction/";
const token = localStorage.getItem("token");

const auctionRequest = (
  itemName,
  description,
  image,
  bidStart,
  bidEnd,
  seller,
  startingBid
) => {
  console.log(bidStart, bidEnd);
  return axios.post(
    API_URL + "request",
    {
      itemName,
      description,
      image,
      bidStart,
      bidEnd,
      seller,
      startingBid,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
};

// eslint-disable-next-line
export default {
  auctionRequest,
};