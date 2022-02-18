const axios = require('axios');

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("refreshToken"));
  return user?.refreshToken;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("accessToken"));
  return user?.accessToken;
};

const updateNewAccessToken = (token) => {
  let user = JSON.parse(localStorage.getItem("accessToken"));
  user.accessToken = token;
  localStorage.setItem("userCredentials", JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("userCredentials"));
};

const setUser = (user) => {
  //   console.log(JSON.stringify(user));
  localStorage.setItem("userCredentials", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("userCredentials");
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
