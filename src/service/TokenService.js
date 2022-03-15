import axios from "axios";
import AuthLinkProvider from "./AuthLinkProvider";

const updateNewAccessToken = (token) => {
  JSON.parse(localStorage.getItem("Token"));
  localStorage.setItem("Token", JSON.stringify(token));
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
}

const getNewTokenCredentials = async () => {
  try {
    const refreshToken = getLocalRefreshToken();
    const res =  await axios.post(`${process.env.REACT_APP_API_URL}/api/refresh-token`, {}, {
      headers: {
        authorization : `Bearer ${refreshToken}`
      }
    }); 
    return res.data.response;

  } catch (error) {
    console.log(error); 
  }
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

const clickStatus = async () => {
  const currentLink = await AuthLinkProvider.getCurrentLink();
  const data = {id: currentLink._id, active_at: currentLink.active_at}
  localStorage.setItem("Clicked", JSON.stringify(data));
}

const verifyClickStatus = async() => {
  const currentLink = await AuthLinkProvider.getCurrentLink();
  const currentStorage = getClickStatus();

  console.log(currentLink._id + " " + currentStorage.id);
}

const TokenService = {
  updateNewAccessToken,
  getUser,
  setUser,
  removeUser,
  clickStatus,
  verifyClickStatus,
  getClickStatus,
  getLocalRefreshToken,
  getLocalAccessToken,
  getNewTokenCredentials
}

export default TokenService;
