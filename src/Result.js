import { Card, Row } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import logo from "./assets/logo.svg"
import lock from "./assets/lock.svg"
import SocialIcon from "./components/SocialIcon";
import CustomButton from "./components/CustomButton";

function Result() {
  return (
    <Row className="m-2 m-md-0" style={{height: "80vh", overflow: "hidden"}}>
      <Card className="col-12 col-md-4 mx-auto my-auto d-flex shadow p-4 text-center" style={{border: "none"}}>
        <CustomIcon src={lock} alt="icon" height={25}></CustomIcon>
        <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>Listo.</Card.Title>
        <Card.Body style={{fontSize: "1em"}}>Para acceder a este contenido realiza lo siguiente:</Card.Body>
        <SocialIcon src={logo} height={50} alt="Social Media Icon" />
        <CustomButton text="DALE LIKE"/>
      </Card>
    </Row>
  );
}

export default Result;
