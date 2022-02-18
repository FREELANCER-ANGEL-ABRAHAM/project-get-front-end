import axios from 'axios';
import authToken from './authToken';

const getAllLinks = () => {
  const token = authToken.getLocalAccessToken();
  return axios.get('http://localhost:80/api/links', {
    'Authorization': `Bearer ${token}`
  });
}

const authLink = {
  getAllLinks
}

export default authLink;