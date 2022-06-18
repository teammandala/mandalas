import axios from "axios";

const API_URL = "http://localhost:8080/api/kyc/" 

const token = localStorage.getItem("token");

const getKycData = async()=>{
    const res = await axios.get(API_URL + "getdata");
    return res;
}

export default{
    getKycData
}