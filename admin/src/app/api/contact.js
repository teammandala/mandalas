import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auth/";

const token = localStorage.getItem("token");



//current contact data
const getCurrentcontact = () => {
  return JSON.parse(localStorage.getItem("contact"));
};

// logout
const logout = () => {
  localStorage.removeItem("contact");
};

const getAllContact = async () => {
  return await axios.get(API_URL + "getAllContact");
};


const contactDelete = async (id) => {
  return await axios.delete(API_URL + "delete/" + id, console.log(id), {
    headers: {
      "content-Type": "application/json",
    },
  });
};

export default {
  getCurrentcontact,
  getAllContact,
  contactDelete
  // updatecontact,
};
