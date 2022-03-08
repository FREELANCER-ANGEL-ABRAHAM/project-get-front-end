import UserForm from './components/UserForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import authClient from './service/authClient'

const ChangePassword = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;
    try {
      authClient.changePassword(password, user).then(() => {
        navigate("/admin");
        window.location.reload();
      }, (err) => {
        const response = err;

        console.log(response)

        setErrorMessage(response);

        if (response) {
          setError(true);
        }
      }
      );
    } catch (err) {
      console.log(err);
    }
  }

  const formArr = [
    {
      placeholder: "Nombre de usuario",
      name: "user",
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