import axios from 'axios'
import TokenService from './authToken';

const login = (password, username) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
      username,
      password
  })
    .then((response) => {
      if(response.data.tokens.accessToken){
        TokenService.setUser(response.data.tokens);
      }
      return response.data;
    })

}

const changePassword = (password, username) => {
  const token = TokenService.getUser();
  return axios.post(`${process.env.REACT_APP_API_URL}/api/change-password`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }})
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userCredentials"));
};

const authClient = {
  login,
  changePassword,
  getCurrentUser
}

export default authClient;