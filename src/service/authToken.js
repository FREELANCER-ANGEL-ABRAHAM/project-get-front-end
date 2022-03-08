const updateNewAccessToken = (token) => {
  JSON.parse(localStorage.getItem("Token"));
  localStorage.setItem("Token", JSON.stringify(token));
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
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
  removeClickStatus
}

export default TokenService;