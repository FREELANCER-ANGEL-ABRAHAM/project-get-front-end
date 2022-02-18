import axios from 'axios'
import TokenService from './authToken';

const logout = () => {
  localStorage.clear();
}

const login = (password, username) => {
  return axios.post('http://localhost:80/api/login', {
      username,
      password
  })
    .then((response) => {
      if(response.data.accessToken){
        TokenService.setUser(response.data);
      }
      return response.data;
    })

}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userCredentials"));
};

const authClient = {
  logout,
  login,
  getCurrentUser
}

export default authClient;