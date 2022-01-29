import { Card, Row } from "react-bootstrap";
import styled from "styled-components";

const Panel = () => {
  return (
    <Row>
      <Card className="col-4 mx-auto shadow-sm">
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </Row>
  );
};

export default Panel;
