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

const getAuctionBySeller = async (id) => {
  return await axios.get(API_URL + "getmyauction/" + id);
};

const auctionDelete = async (id) => {
  return await axios.delete(API_URL + "delete/" + id, {
    headers: {
      "content-Type": "application/json",
    },
  });
};

const getMyBid = async (id) => {
  return await axios.get(API_URL + "getmybidding/" + id);
};

const auctionStatus = async (id, usercontactstatus) => {
  // console.log(id, status);
  return await axios.put(
    API_URL + `usercontactstatus/` + id,
    { usercontactstatus },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const auctiondeliveryStatus = async (id, deliverystatus) => {
  // console.log(id, status);
  return await axios.put(
    API_URL + `deliverystatus/` + id,
    { deliverystatus },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};


export default {
  auctionRequest,
  getApprovedAuctionData,
  getCurrentAuction,
  getAuctionBySeller,
  auctionDelete,
  getMyBid,
  auctionStatus,
  auctiondeliveryStatus,
};
