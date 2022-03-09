import UserForm from './components/UserForm'
import { useNavigate } from 'react-router-dom'
import authClient from './service/authClient'
import { useState } from "react";

const ChangePassword = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    try {
      await authClient.changePassword(username, password, newPassword);
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

  const formArr = [
    {
      placeholder: "Nombre de usuario",
      name: "username",
      id: "user",
      type: "text",
      required: "true",
    },
    {
      placeholder: "Contraseña actual",
      name: "currentPassword",
      id: "currentPassword",
      type: "password",
      required: "true",
    },
    {
      placeholder: "Contraseña nueva",
      name: "newPassword",
      id: "newPassword",
      type: "password",
      required: "true",
    },
  ]

  return (
    <UserForm error={error} errorMessage={errorMessage} handleSubmit={handleSubmit} formArr={formArr} submitButton="Cambiar" />
  )
}

export default ChangePassword