import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auction/";

const token = localStorage.getItem("token");

//get all auction data
const getAuctionData = async () => {
  const res = await axios.get(API_URL + "getdata");
  return res;
};

const auctionStatus = async (id, status) => {
  // console.log(id, status);
  return await axios.put(
    API_URL + `status/` + id,
    { status },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAuctionData,
  auctionStatus,
};
