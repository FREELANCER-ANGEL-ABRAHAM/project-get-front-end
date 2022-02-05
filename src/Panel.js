import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardLink from "./components/CardLink";
import FloatingActionButton from "./components/FloatingActionButton";

const Panel = () => {

  let exampleDb = [
    <CardLink />,
    <CardLink />,
    <CardLink />,
    <CardLink />
  ]
  
  const [items, updateArray] = useState()

  return (
    <Row className="mt-2 gy-4">
      {exampleDb}
    </Row>
  );
};

export default Panel;
