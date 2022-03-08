import { Card, Button, Container } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import socialLogo from "./assets/socialmedia-logos/instagram.svg"
import lock from "./assets/lock.svg"
import SocialIcon from "./components/SocialIcon";
import CustomButton from "./components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthLinkProvider from "./service/authLink";
import TokenService from "./service/authToken";
import './sass/components/_button.scss';

const StartPage = () => {

  const navigate = useNavigate()

  const [enableButton, setEnableButton] = useState(true);

  const [links, setLinks] = useState({
    id: 1,
    title: 'Complete los pasos para continuar.',
    description: 'Para acceder a este contenido realiza lo siguiente:',
    image: socialLogo,
    url: '/result',
    btn_name: 'Dale Like',
    count_click: 0
  });

  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getCurrentLink();
        if(response){
          setLinks(response);
          if(enableButton){
            if(TokenService.getClickStatus() === 'true'){
              setEnableButton(false);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []); 

  const routeChange = async () =>{ 
    let path = links.url;
    TokenService.setClickStatus();
    if(TokenService.getClickStatus() === 'true'){
      setEnableButton(false);
    }
    try {
      const response = await AuthLinkProvider.getCurrentLink();
      const values = {id: response._id, count_click: response.count_click + 1};
      console.log(links.image);
      await AuthLinkProvider.updateCountLink(values);
    } catch (error) {
      console.error(error);
    }
    window.open(path, '_blank');
  }
  

  return (
    <div className="col-12 col-md-6 col-lg-4 mx-auto p-2" style={{minHeight: "calc(100vh - 7.688rem)", display: "flex", alignItems: "center"}}>
      <Container>
        <Card className="mx-auto shadow p-3 text-center" style={{border: "none",}}>
            <CustomIcon src={lock} alt="icon" height={25}></CustomIcon>
            <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>{links.title}</Card.Title>
            <Card.Body style={{fontSize: "1em"}}>{links.description}</Card.Body>
            { links.image ? <SocialIcon src={links.image} className="text-center m-2" height={80} width={82.05} /> : null }
            <CustomButton children={links.btn_name} onClick={ () => routeChange()} style={{}} />
          </Card>
      
          <Button 
            className="w-100 mx-auto btn-lg p-4 mt-2 disabledButton" 
            variant="danger" 
            onClick={() => navigate('/result')} 
            style={{ border: "none"}} 
            disabled={enableButton}>
              Continuar
          </Button>
      </Container>
      
    </div>
  );
};

export default StartPage;