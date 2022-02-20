import axios from 'axios';
import authClient from './authClient';
import TokenService from './authToken';

const getAllLinks = async (page = 1, name, limit = 9) => {
  try {
    const token = TokenService.getUser();
    const params = { page, limit };
    if(name){
      params.name = name;
    }
    const res = await axios.get(`http://localhost:80/api/links`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: params
    });
    const links = res.data.links;

    return links;
  } catch (error) {
    console.log(error);
  }
}

const getCurrentLink = async () => {
  try {
    const res = await axios.get('http://localhost:80/api/link');
    const links = res.data.links;

    return links;
  } catch (error) {
    console.log(error);
  }
}

const getLinkById = async (id) => {
  try {
    const token = TokenService.getUser();
    const res = await axios.get(`http://localhost:80/api/link_id/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const links = res.data.links;

    return links;
  } catch (error) {
    console.log(error);
  }
}

const updatelink = async (values) => {
    const token = TokenService.getUser();
    const res = await axios.patch('http://localhost:80/api/update-link', values, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
   return res;
}

const deleteLink = async (id) => {
  const token = TokenService.getUser();
  const res = await axios.delete(`http://localhost:80/api/delete-link/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
 return res;
}

const saveLink = async (values) => {
  const token = TokenService.getUser();
  const res = await axios.post('http://localhost:80/api/create-link', values,  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  });

  return res;
}

const AuthLinkProvider = {
  getAllLinks,
  getCurrentLink,
  updatelink,
  deleteLink,
  saveLink,
  getLinkById,
}

export default AuthLinkProvider;