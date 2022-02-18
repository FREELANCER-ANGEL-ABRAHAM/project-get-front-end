import { Card, Row, Button } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import socialLogo from "./assets/socialmedia-logos/instagram.svg"
import lock from "./assets/lock.svg"
import SocialIcon from "./components/SocialIcon";
import CustomButton from "./components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const StartPage = () => {


  const navigate = useNavigate()

  const [enableButton, setEnableButton] = useState(true)

  return (
    <div className="col-12 col-md-6 col-lg-4" style={{left: "50%", top: "50%", position: "absolute", transform: "translate(-50%, -50%)"}}>
      <div className="p-2">
        <Card className="mx-auto shadow p-3 text-center" style={{border: "none",}}>
            <CustomIcon src={lock} alt="icon" height={25}></CustomIcon>
            <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>Complete los pasos para continuar.</Card.Title>
            <Card.Body style={{fontSize: "1em"}}>Para acceder a este contenido realiza lo siguiente:</Card.Body>
            <SocialIcon src={socialLogo} className="text-center mt-3 mb-5" height={80} width={82.05} alt="Social Media Icon" />
            <CustomButton children="DALE LIKE" onClick={ () => setEnableButton(false)} style={{height: "4.063rem"}} />
          </Card>
      
          <Button 
            className="w-100 mx-auto btn-lg p-4 mt-2" 
            variant="danger" 
            onClick={() => navigate('/result')} 
            style={{ border: "none"}} 
            disabled={enableButton}>
              Continuar
          </Button>
      </div>
      
    </div>
  );
};

export default StartPage;
