import UserForm from './components/UserForm'
import { useNavigate } from 'react-router-dom'
import authClient from './service/authClient'
import TokenService from './service/authToken'
import { useState } from "react";

const ChangePassword = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;
    try {
      const response = await authClient.changePassword(password, user);
      navigate("/admin");
    } catch (err) {
      const response = err.response.data.error.message;
      setErrorMessage(response);
      if(response) {
        setError(true);
      }
      window.scrollTo(0, 0);
    }
  }

  return (
    <UserForm error={error} errorMessage={errorMessage} handleSubmit={handleSubmit} submitButton="Cambiar" />
  )
}

export default ChangePassword