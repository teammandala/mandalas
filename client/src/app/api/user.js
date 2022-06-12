import axios from "axios";

// api url for auth
const API_URL = "http://localhost:8080/api/auth/";

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

// eslint-disable-next-line
export default {
  register,
  login,
  getCurrentUser,
  logout,
};
