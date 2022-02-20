import { Row, Card, Form, Alert } from "react-bootstrap";
import userLogo from "./assets/user.svg"
import styled from "styled-components";
import CustomButton from "./components/CustomButton";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import authClient from "./service/authClient";

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  font-size: 21.6px;
  border: 2px solid #3498db;
  color: white;
  background: #3498db;
  position: absolute;
  margin: auto;
  top: -75px;
  right: 0;
  left: 0;
`


const AdminLogin = () => {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const password = e.target.password.value;
    try {
      const resUser = authClient.login(password, user).then(() => {
          navigate("/panel");
          window.location.reload();
        }, (error) => {
          //console.log(error.response.data.error.message);
          const response = error.response.data.error.message;

          setErrorMessage(response);

          if(response) {
            setError(true);
          }
        }
      );
    } catch (err) {
      console.log(err);
    };
  }

  return (
    <>
      {error ?
        <Alert variant={'danger'} className="mt-2">
          {errorMessage}
        </Alert>
        : null
      }

      <div>
        <Row className="m-2 m-md-0">
          <Card className="col-12 col-md-6 col-lg-4 mx-auto shadow pt-4 text-center" style={{ left: "50%", top: "50%", position: "absolute", transform: "translate(-50%, -50%)" }}>
            <Card.Body style={{ fontSize: "1em" }} style={{ position: "relative" }}>
              <StyledImage src={userLogo} />
              <Form method="post" onSubmit={handleSubmit} className="mt-4">
                <Form.Group className="mb-3" controlId="user">
                  <Form.Control type="text" id="user" name="user" placeholder="Nombre de usuario" style={{ height: "36px" }} required="true" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" id="password" name="password" placeholder="Contraseña" required="true" />
                </Form.Group>
                <CustomButton children="Iniciar" style={{ padding: "1rem" }} type="submit" />
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default AdminLogin;
