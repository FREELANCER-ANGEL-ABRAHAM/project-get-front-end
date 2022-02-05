import { Card, Row, Button } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import socialLogo from "./assets/socialmedia-logos/instagram.svg"
import lock from "./assets/lock.svg"
import SocialIcon from "./components/SocialIcon";
import CustomButton from "./components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StartPage = () => {

  const navigate = useNavigate()

  const [enableButton, setEnableButton] = useState(true)

  return (
    <>
      <Row className="m-2 m-md-0">
        <Card className="col-12 col-md-4 mx-auto my-auto d-flex shadow p-4 text-center" style={{border: "none"}}>
          <CustomIcon src={lock} alt="icon" height={25}></CustomIcon>
          <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>Complete los pasos para continuar.</Card.Title>
          <Card.Body style={{fontSize: "1em"}}>Para acceder a este contenido realiza lo siguiente:</Card.Body>
          <SocialIcon src={socialLogo} height={80} width={82.05} alt="Social Media Icon" />
          <CustomButton children="DALE LIKE" onClick={ () => setEnableButton(false)} />
        </Card>
      </Row>
      <Row className="mt-2">
        <Button 
          className="col-12 col-md-4 mx-auto btn-lg p-4" 
          variant="danger" 
          onClick={() => navigate('/result')} 
          style={{ border: "none"}} 
          disabled={enableButton}>Continuar</Button>
      </Row>
    </>
  );
};

export default StartPage;
