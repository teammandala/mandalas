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

//get all approved auction data
const getApprovedAuctionData = async () => {
  const res = await axios.get(API_URL + "getdata");
  return res;
};

const getCurrentAuction = async (id) => {
  return await axios.get(API_URL + "getdata/" + id);
};

const read = async (params, signal) => {
  try {
    let response = await fetch("/api/auction/" + params.auctionId, {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export default {
  auctionRequest,
  getApprovedAuctionData,
  getCurrentAuction,
  read,
};
