import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/contact/";


const getAllContact = async () => {
  return await axios.get(API_URL + "getAllContact");
};



const contactStatus = async (id, status) => {
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

export default {
  getAllContact,
  contactStatus
};
