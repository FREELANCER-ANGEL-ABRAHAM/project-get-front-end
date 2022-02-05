import { Row, Card, Form } from "react-bootstrap";
import userLogo from "./assets/user.svg"
import styled from "styled-components";
import CustomButton from "./components/CustomButton";
import { Navigate, useNavigate } from "react-router-dom";

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

  const navigator = useNavigate();

  return (
    <Row className="m-2 m-md-0" style={{height: "80vh", overflow: "hidden"}}>
      <Card className="col-12 col-md-6 col-lg-4 mx-auto my-auto d-flex shadow pt-4 text-center">
        <Card.Body style={{fontSize: "1em"}} style={{position: "relative"}}>
          <StyledImage src={userLogo}/>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="user">
              <Form.Control type="text" placeholder="Nombre de usuario" style={{height: "36px"}} required="true" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control type="password" placeholder="Contrasena" required="true" />
            </Form.Group>
            <CustomButton children="Iniciar" />
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AdminLogin;
