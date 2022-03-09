import axios from "axios";

const updateNewAccessToken = (token) => {
  JSON.parse(localStorage.getItem("Token"));
  localStorage.setItem("Token", JSON.stringify(token));
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
}

const getNewTokenCredentials = async () => {
  const refreshToken = getLocalRefreshToken();
  const body = {};
  const res =  await axios.post(`${process.env.REACT_APP_API_URL}/api/refresh-token`, body, {
    headers: {
      authorization : `Bearer ${refreshToken}`
    }
  });

  return res.data.response;
}

const getLocalAccessToken = () => {
  return JSON.parse(localStorage.getItem("Token"));
}

const getLocalRefreshToken = () => {
  return JSON.parse(localStorage.getItem("refreshToken"));
}

const getClickStatus = () => {
  return localStorage.getItem("Clicked");
}

const setUser = (user) => {
  localStorage.setItem("Token", JSON.stringify(user.accessToken));
  localStorage.setItem("refreshToken", JSON.stringify(user.refreshToken));
}

const removeUser = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("refreshToken");
}

const removeClickStatus = () => {
  localStorage.removeItem("Clicked");
}

const clickStatus = () => {
  localStorage.setItem("Clicked", JSON.stringify(false));
}

const setClickStatus = () => {
  localStorage.setItem("Clicked", JSON.stringify(true));
}

const TokenService = {
  updateNewAccessToken,
  getUser,
  setUser,
  removeUser,
  clickStatus,
  setClickStatus,
  getClickStatus,
  removeClickStatus,
  getLocalRefreshToken,
  getLocalAccessToken,
  getNewTokenCredentials
}

export default TokenService;