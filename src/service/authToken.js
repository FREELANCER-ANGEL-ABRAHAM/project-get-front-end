const axios = require('axios');

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("refreshToken"));
  return user;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("Token"));
  return user;
};

const updateNewAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("Token"));
  user = token;
  localStorage.setItem("Token", JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
};

const setUser = (user) => {
  //   console.log(JSON.stringify(user));
  localStorage.setItem("Token", JSON.stringify(user.accessToken)); //user = {accessToken : " ", refreshToken: " "}
  localStorage.setItem("refreshToken", JSON.stringify(user.refreshToken));
};

const removeUser = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("refreshToken");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateNewAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
