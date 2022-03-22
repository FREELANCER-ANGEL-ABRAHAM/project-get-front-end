import { Card, Form, Alert } from "react-bootstrap";
import userLogo from "../assets/user.svg"
import CustomButton from "../components/CustomButton";

const UserForm = ({ error, errorMessage, handleSubmit, submitButton, formArr, redirect }) => {

  const hasRedirect = !!redirect;
  return (
    <>
      <div>
        <div className="mt-5 mb-5">
          <Card className="col-12 col-md-6 col-lg-4 mx-auto shadow pt-4 text-center" >
            <Card.Body style={{ fontSize: "1em", position: "relative" }}>
              <img src={userLogo} alt="Logo"/>
              <h1 className=" mt-3 fw-bold">{submitButton}</h1>
              <Form method="post" onSubmit={handleSubmit} className="mt-4 testform">
                {formArr.map(({ placeholder, name, id, type, required }, index) => (
                  <Form.Group className="mb-3" controlId={id} key={index} >
                    <Form.Control type={type} id={id} name={name} placeholder={placeholder} style={{ height: "36px" }} required={required} />
                  </Form.Group>
                ))}
                <CustomButton children={submitButton} style={{ padding: "1rem" }} type="submit" id="submitBtn" />
                {hasRedirect && (
                  <div className="mt-3 text-justify">
                    <a href={redirect.link.to} className="text-muted" id="changePasswordLabel">{redirect.link.label}</a>
                  </div>
                )}
              </Form>
              {error ?
                <Alert variant={'danger'} className="mt-2">
                  {errorMessage}
                </Alert>
                : null
              }
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