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
  console.log(idImage);
  console.log(token);
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

// eslint-disable-next-line
export default {
  kycRequest,
};
