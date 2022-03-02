import axios from 'axios';
import TokenService from './authToken';

const getAllLinks = async (name, page = 1, limit = 9) => {
  try {
    const token = TokenService.getUser();
    const params = { page, limit };
    if(name){
      params.name = name;
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/links`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: params
    });
    return res.data.links;
  } catch (error) {
    console.log(error);
  }
}

const getAllLinksJustPage = async (page = 1, limit = 9) => {
  try {
    const token = TokenService.getUser();
    const params = { page, limit };

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/links`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: params
    });

    return res.data.links;
  } catch (err) {
    console.log(err);
  }
}

const getCurrentLink = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/link`);
    return res.data.links;
  } catch (error) {
    console.log(error);
  }
}

const getLogo = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/logo`);

    return res.data.logo;
  } catch (err) {
    console.log(err);
  }
}

const getLinkById = async (id) => {
  try {
    const token = TokenService.getUser();
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/link_id/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return res.data.links;
  } catch (error) {
    console.log(error);
  }
}

const updatelink = async (values) => {
    const token = TokenService.getUser();
    return axios.patch(`${process.env.REACT_APP_API_URL}/api/update-link`, values, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
}

const deleteLink = async (id) => {
  const token = TokenService.getUser();
  return axios.delete(`${process.env.REACT_APP_API_URL}/api/delete-link/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

const saveLogo = async (values) => {
  const token = TokenService.getUser();
  return axios.post(`${process.env.REACT_APP_API_URL}/api/create-logo`, values,  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  });
}

const saveLink = async (values) => {
  const token = TokenService.getUser();
  return axios.post(`${process.env.REACT_APP_API_URL}/api/create-link`, values,  {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  });
}

const AuthLinkProvider = {
  getAllLinks,
  getCurrentLink,
  updatelink,
  deleteLink,
  saveLink,
  getLinkById,
  saveLogo,
  getLogo,
  getAllLinksJustPage
}

export default AuthLinkProvider;