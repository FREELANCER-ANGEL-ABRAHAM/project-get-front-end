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

  const navigate = useNavigate();

  return (
    <div style={{position: "absolute", top: "calc(70% - 6.563rem - 7.688rem)", margin: "0 auto", left:"0", right: "0"}}>
      <Row className="m-2 m-md-0">
        <Card className="col-12 col-md-6 col-lg-4 mx-auto shadow pt-4 text-center">
          <Card.Body style={{fontSize: "1em"}} style={{position: "relative"}}>
            <StyledImage src={userLogo}/>
            <Form className="mt-4">
              <Form.Group className="mb-3" controlId="user">
                <Form.Control type="text" id="user" name="user" placeholder="Nombre de usuario" style={{height: "36px"}} required="true" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control type="password" id="password" name="password" placeholder="Contraseña" required="true" />
              </Form.Group>
              <CustomButton children="Iniciar" style={{padding: "1rem"}} onClick={() => navigate('/panel')} />
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default AdminLogin;
