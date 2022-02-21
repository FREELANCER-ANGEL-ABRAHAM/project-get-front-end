import React from 'react';
import {Card, Form, Button, Row, Alert, image} from 'react-bootstrap'
import { useState  } from "react";
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from './service/authLink';

const style = {

}


const Settings = ()  => {
  const [pictureValue, setPictureValue] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [logo, setLogo] = useState({
    image: [],
  });
  
  const handleSaveLogo = async(e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('image', logo.image);
    form_data.append('status', 'active');

    try {
      const res = await AuthLinkProvider.saveLogo(form_data);
      setPictureValue();
      setLogo({});
      navigate("/panel");
      window.location.reload();
    } catch (error) {
      const response = error.response.data.error.message;
      setErrorMessage(response);

      if(response) {
        setError(true);
      }
    }
  }
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));

    let { name, value, type } = e.target;
    if (type === 'file') {
      setPictureValue(e.target.files[0].name);
      value = e.target.files[0];
    }
    setLogo((logo) => {
      const gestor = { ...logo, [name]: value };
      return gestor;
    });
  };

  return (
    <>
      {error && (
          <div className="mt-2">
            <Alert variant={'danger'} className="mt-2">
              {errorMessage}
            </Alert>
          </div>
      )}
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
                    <Form.Control type="file" name='image' onChange={handleChange} accept='image/x-png,image/gif,image/jpeg'/>
                  </Form.Group>
                  <Button variant="primary" className='p-3 w-100' onClick={handleSaveLogo} type="submit">
                    Aplicar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Row>
        
        <Row className='w-100'>
          <div className='col-12 col-sm-6 col-md-4 mx-auto'>
            <img src={imagePreview} className='d-flex mt-2' style={{background: '#C4C4C4', borderRadius: '5px!important', height: '310px', width: '410px'}}/>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Settings;
