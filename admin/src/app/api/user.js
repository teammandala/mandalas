import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auth/";

const token = localStorage.getItem("token");

// user login
const login = (username, password) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axios
    .post(
      API_URL + "login",
      {
        username,
        password,
      },
      config
    )
    .then((res) => {
      if (res.data.token && res.data.user) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data.user);
      }
      return res.data;
    });
};

//current user data
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// logout
const logout = () => {
  localStorage.removeItem("user");
};

const getAllUser = async () => {
  return await axios.get(API_URL + "getalluser");
};

const kycApprove = async (id, role) => {
  // console.log(id, status);
  return await axios.put(
    API_URL + `role/` + id,
    { role },
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

const userDelete = async (id) => {
  return await axios.delete(API_URL + "delete/" + id, console.log(id), {
    headers: {
      "content-Type": "application/json",
    },
  });
};

export default {
  // register,
  login,
  getCurrentUser,
  logout,
  getAllUser,
  kycApprove,
  userDelete
  // updateUser,
};
