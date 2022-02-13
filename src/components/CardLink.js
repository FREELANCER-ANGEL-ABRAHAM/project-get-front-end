import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function CardLink() {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title style={{fontWeight: "600", fontSize: "1.5em"}}>
            Link para imagenes educativas.
          </Card.Title>
          <div className="d-grid gap-2">
            <Button className="p-4" variant="primary" size="lg" style={{fontWeight: 700, fontSize: "1em"}}>
              Modificar
            </Button>
            <Button className="p-4" variant="danger" size="lg" style={{fontWeight: 700, fontSize: "1em"}}>
              Eliminar
            </Button>
            <Form.Check
              className="mt-1"
              type="switch"
              id="linkEnabled"
              label="Activar este link"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardLink;
