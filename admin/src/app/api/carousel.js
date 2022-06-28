import axios from "axios";

const API_URL = "http://localhost:8080/api/carousel/";
const token = localStorage.getItem("token");

const carouselRequest = (itemName, description, image) => {
  console.log(itemName, description, image);
  return axios.post(
    API_URL + "request",
    {
      itemName,
      description,
      image,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
};

const getCarouselData = async () => {
  const res = await axios.get(API_URL + "getdata");
  return res;
};

const carouselDelete = async (id) => {
  return await axios.delete(API_URL + "delete/" + id, console.log(id), {
    headers: {
      "content-Type": "application/json",
    },
  });
};

// eslint-disable-next-line
export default {
  carouselRequest,
  getCarouselData,
  carouselDelete,
};
