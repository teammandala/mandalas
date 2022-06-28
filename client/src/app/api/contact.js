import axios from "axios";

const API_URL = "http://localhost:8080/api/contact/";
const token = localStorage.getItem("token");

const contactRequest = (
  fullName,
  email,
  message,
) => {
  return axios.post(
    API_URL + "request",
    {
      fullName,
      email,
      message,
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
  contactRequest,
};
