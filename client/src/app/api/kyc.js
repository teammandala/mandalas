import axios from "axios";

const API_URL = "http://localhost:8080/api/kyc/";
const token = localStorage.getItem("token");

const kycRequest = (
  fullName,
  email,
  phone,
  address,
  country,
  user,
  idImage
) => {
  return axios.post(
    API_URL + "request",
    {
      fullName,
      email,
      phone,
      address,
      country,
      user,
      idImage,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
};

const getCurrentKyc = async (id) =>{
  return await axios.get(
    API_URL + "getdata/" + id);  
};
// eslint-disable-next-line
export default {
  kycRequest,
  getCurrentKyc
};
