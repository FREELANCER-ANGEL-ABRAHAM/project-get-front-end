const getLocalRefreshToken = () => {
  return JSON.parse(localStorage.getItem("refreshToken"));
}

const getLocalAccessToken = () => {
  return JSON.parse(localStorage.getItem("Token"));
}

const updateNewAccessToken = (token) => {
  JSON.parse(localStorage.getItem("Token"));
  localStorage.setItem("Token", JSON.stringify(token));
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("Token"));
}

const setUser = (user) => {
  localStorage.setItem("Token", JSON.stringify(user.accessToken));
  localStorage.setItem("refreshToken", JSON.stringify(user.refreshToken));
}

const removeUser = () => {
  localStorage.removeItem("Token");
  localStorage.removeItem("refreshToken");
}

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateNewAccessToken,
  getUser,
  setUser,
  removeUser,
}

export default TokenService;