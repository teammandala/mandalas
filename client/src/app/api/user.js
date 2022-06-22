import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auth/";

const token = localStorage.getItem("token");

// register user
const register = (username, name, email, phone, password) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axios.post(
    API_URL + "register",
    {
      username,
      name,
      email,
      phone,
      password,
    },
    config
  );
};

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

const updateUser = (username, email, name, phone, address, bio, avatar) => {
  const currentUser = getCurrentUser();
  return axios
    .put(
      API_URL + "profile/" + currentUser._id,
      {
        username,
        email,
        name,
        phone,
        address,
        bio,
        avatar,
      },
      {
        headers: {
          // "Content-Type": "applicatoin/json",
          //     Accept: "application/x-www-form-urlencoded",
          //     mimeType: "multipart/form-data",
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      localStorage.clear("user");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // console.log(res.data.user);
      return res.data;
    });
};

const updateUserAvatar = (avatar) => {
  const currentUser = getCurrentUser();
  return axios
    .post(
      API_URL + "avatar/" + currentUser._id,
      {
        avatar,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": token,
        },
      }
    )
    .then((res) => {
      localStorage.clear("user");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // console.log(res.data.user);
      return res.data;
    });
};

// eslint-disable-next-line
export default {
  register,
  login,
  getCurrentUser,
  logout,
  updateUser,
  updateUserAvatar,
};
