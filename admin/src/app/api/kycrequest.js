import axios from "axios";

const API_URL = "http://localhost:8080/api/kyc/";

const token = localStorage.getItem("token");

const getKycData = async () => {
  const res = await axios.get(API_URL + "getdata");
  return res;
};

const kycStatus = async (kycId, status) => {
  // console.log(id, status);
  return await axios.put(
    API_URL + `status/` + kycId,
    { status },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // .then((res) => {
  //   return res;
  // });
};

export default {
  getKycData,
  kycStatus,
};
