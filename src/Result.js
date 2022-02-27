import { Card, Container } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import success from "./assets/check.svg";

function Result() {
  return (
    <div className="col-12 col-md-6 col-lg-4 mx-auto p-2" style={{minHeight: "calc(100vh )", display: "flex", alignItems: "center"}}>
      <Container>
        <Card className="shadow p-4 text-center" style={{border: "none"}}>
          <CustomIcon src={success} alt="icon" height={25}></CustomIcon>
          <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>Haz completado todos los pasos..</Card.Title>
          <Card.Body style={{fontSize: "1em"}}>Contenido: -</Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Result;
