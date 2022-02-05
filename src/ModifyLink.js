import React from 'react';
import { Form, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ModifyLink() {

  const [showImageSelector, setShowImageSelector] = React.useState(false)

  const handleShowImageSelector = (event) => {
    if(event.target.value === "otro") {
      setShowImageSelector(true)
    } else {
      setShowImageSelector(false)
    }
  }

  const navigate = useNavigate()

  return (
    <Row className='align-items-center mt-5'>
      <div className="col-12 col-md-6 mx-auto">
        <Card className='shadow p-2'>
          <Card.Body>
            <Form>
              <Row>
                <Form.Group className='col-12 col-md-6' >
                  <Form.Label>Nombre del link. *</Form.Label>
                  <Form.Control placeholder='Nombre del link'/>
                </Form.Group>
                <Form.Group className='col-12 col-md-6 mt-2 mt-sm-0'>
                  <Form.Label>Titulo. *</Form.Label>
                  <Form.Control placeholder='Titulo'/>
                </Form.Group>
              </Row>
              <Form.Group className='mt-2'>
                <Form.Label>Descripcion. *</Form.Label>
                <div>
                  <textarea className='w-100' rows={5}></textarea>
                </div>
              </Form.Group>
              <Row className='mt-sm-1'>
                <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                  <Form.Label>Nombre del boton. *</Form.Label>
                  <Form.Control placeholder='Nombre del boton' required={true}/>
                </Form.Group>
                <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                  <Form.Label>Link del boton. *</Form.Label>
                  <Form.Control placeholder='Link del boton' required={true} />
                </Form.Group>
              </Row>
              <Form.Group className='mt-2'>
                <Form.Label>Imagen. *</Form.Label>
                <Form.Select required={true} onChange={handleShowImageSelector} >
                  <option disabled="true">Selecciona una imagen</option>
                  <option value="youtube">Youtube</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="otro">Otro</option>
                </Form.Select>
              </Form.Group>
              { showImageSelector ? 
                  <Form.Group controlId="formFile" className="mt-2">
                    <Form.Label>Seleccione una imagen.</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group> : null }
              <p className='mt-4 text-center fw-bold'>Editar informacion del resultado.</p>
              <Row>
                <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                  <Form.Label>Detalle del resultado. *</Form.Label>
                  <Form.Control placeholder='Detalle del resultado' required={true} />
                </Form.Group>
                <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                  <Form.Label>Contenido del resultado. *</Form.Label>
                  <Form.Control placeholder='Contenido del resultado' required={true} />
                </Form.Group>
              </Row>
              <div className='d-grid gap-1 mt-3'>
                <Button className="p-4" variant="primary" size="lg" style={{fontWeight: 700, fontSize: "1em"}}>
                  Crear
                </Button>
                <Button className="p-4" variant="danger" size="lg" onClick={() => navigate('/panel')}  style={{fontWeight: 700, fontSize: "1em"}}>
                  Cancelar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Row>
  );
}

export default ModifyLink;
