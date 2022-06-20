import axios from "axios";

const API_URL = "http://localhost:8080/api/carousel/";


const getCarouselData = async () => {
    const res = await axios.get(API_URL + "getdata");
    return res;
  };
  export default{
    getCarouselData
  }