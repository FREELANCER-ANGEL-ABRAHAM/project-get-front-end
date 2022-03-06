import UserForm from "./components/UserForm"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authClient from "./service/authClient";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;
    try {
      authClient.login(password, user).then(() => {
        navigate("/panel");
        window.location.reload();
      }, (err) => {
        const response = err.response.data.error.message;

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

  const redirect = {
    label: "Olvidaste la contrasena?.",
    link: {
      label: "Cambiar contrasena",
      to: "/changepassword"
    }
  }

  return (
    <UserForm error={error} errorMessage={errorMessage} handleSubmit={handleSubmit} submitButton="Iniciar" redirect={redirect} />
  )
}

export default AdminLogin