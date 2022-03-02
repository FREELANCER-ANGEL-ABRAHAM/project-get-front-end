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

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userCredentials"));
};

const authClient = {
  login,
  getCurrentUser
}

export default authClient;