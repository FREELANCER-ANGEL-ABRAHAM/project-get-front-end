import { Card, Button } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import socialLogo from "./assets/socialmedia-logos/instagram.svg"
import lock from "./assets/lock.svg"
import SocialIcon from "./components/SocialIcon";
import CustomButton from "./components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthLinkProvider from "./service/authLink";

const StartPage = () => {

  const navigate = useNavigate()

  const [enableButton, setEnableButton] = useState(true)

  const [links, setLinks] = useState({
    title: 'Complete los pasos para continuar.',
    description: 'Para acceder a este contenido realiza lo siguiente:',
    image: socialLogo,
    url: '/result',
    btn_name: 'Dale Like' 
  });

  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getCurrentLink();
        if(response){
          setLinks(response);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); 

  const routeChange = () =>{ 
    let path = links.url; 
    setEnableButton(false);
    window.location.href = path;
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mx-auto">
      <div className="p-2">
        <Card className="mx-auto shadow p-3 text-center" style={{border: "none",}}>
            <CustomIcon src={lock} alt="icon" height={25}></CustomIcon>
            <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>{links.title}</Card.Title>
            <Card.Body style={{fontSize: "1em"}}>{links.description}</Card.Body>
            <SocialIcon src={links.image} className="text-center mt-3 mb-5" height={80} width={82.05} alt="Social Media Icon" />
            <CustomButton children={links.btn_name} onClick={ () => routeChange()} style={{}} />
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