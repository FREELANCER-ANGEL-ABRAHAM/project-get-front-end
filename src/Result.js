import { Card, Row } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import success from "./assets/check.svg"

function Result() {
  return (
    <Row className="m-2 m-md-0" style={{height: "60vh", overflow: "hidden"}}>
      <Card className="col-12 col-md-4 mx-auto my-auto d-flex shadow p-4 text-center" style={{border: "none"}}>
        <CustomIcon src={success} alt="icon" height={25}></CustomIcon>
        <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>Haz completado todos los pasos..</Card.Title>
        <Card.Body style={{fontSize: "1em"}}>Contenido: -</Card.Body>
      </Card>
    </Row>
  );
}

export default Result;
