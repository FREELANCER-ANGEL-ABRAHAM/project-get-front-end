import { Card, Form, Alert } from "react-bootstrap";
import userLogo from "../assets/user.svg"
import styled from "styled-components";
import CustomButton from "../components/CustomButton";

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


const UserForm = ({ error, errorMessage, handleSubmit, submitButton, formArr, redirect }) => {

  const hasRedirect = !!redirect;
  return (
    <>
      {error ?
        <Alert variant={'danger'} className="mt-2">
          {errorMessage}
        </Alert>
        : null
      }

      <div>
        <div className="mx-auto" style={{ minHeight: "calc(100% - 6.563rem)", display: "flex", alignItems: "center" }}>
          <Card className="col-12 col-md-6 col-lg-4 shadow pt-4 text-center" style={{ left: "50%", top: "50%", position: "absolute", transform: "translate(-50%, -50%)" }}>
            <Card.Body style={{ fontSize: "1em", position: "relative" }}>
              <StyledImage src={userLogo} />
              <Form method="post" onSubmit={handleSubmit} className="mt-4">
                {formArr.map(({ placeholder, name, id, type, required }, index) => (
                  <Form.Group className="mb-3" controlId={id} key={index} >
                    <Form.Control type={type} id={id} name={name} placeholder={placeholder} style={{ height: "36px" }} required={required} />
                  </Form.Group>
                ))}
                <CustomButton children={submitButton} style={{ padding: "1rem" }} type="submit" />
                {hasRedirect && (
                  <div className="mt-3 text-justify">
                    <a href={redirect.link.to} className="text-muted">{redirect.link.label}</a>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

UserForm.defaultProps = {
  formArr: [
    {
      placeholder: "Nombre de usuario",
      name: "user",
      id: "user",
      type: "text",
      required: "true",
    },
    {
      placeholder: "Contraseña",
      name: "password",
      id: "password",
      type: "password",
    },
  ],
  submitButton: "Iniciar",
}

export default UserForm;