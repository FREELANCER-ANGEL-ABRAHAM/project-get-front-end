import React from 'react';
import {Card, Form, Button, Row} from 'react-bootstrap'
import styled from 'styled-components';

const ImagePreview = styled.div`
  background: #C4C4C4;
  border-radius: 5px;
  text-align: center;
  height: 310px;
`

function Settings() {
  return (
    <div>
      <Row className='w-100'>
        <div className='col-12 col-sm- col-md-4 mx-auto'>
          <Card className='mt-3'>
            <Card.Body>
              <Card.Title className='fw-bold'>
                Establecer logo del sitio.
              </Card.Title>
              <Form className='mt-3'>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>
                    Elige una imagen.
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" className='p-3 w-100'>
                  Aplicar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Row>
      
      <Row className='w-100'>
        <div className='col-12 col-sm-6 col-md-4 mx-auto'>
          <ImagePreview className='d-flex mt-2'>
            <p className='my-auto mx-auto'>Preview</p>
          </ImagePreview>
        </div>
      </Row>
    </div>
  );
}

export default Settings;
