import { Form, Row, Card, Button, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import AuthLinkProvider from './service/authLink';
import TokenService from './service/authToken';

const ModifyLink = () => {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [, setPictureValue] = useState();
  const [showImageSelector, setShowImageSelector] = React.useState(false)
  const [link, setLink] = useState({
    name: 'Nombre del link',
    title: 'Titulo',
    description: 'description of link',
    btn_name: 'Nombre del boton',
    url: 'Link del boton',
    image: [],
    detail_result: 'Detalle del resultado',
    contain_result: 'Contenido del resultado',
  });
  
  const handleShowImageSelector = (event) => {
    if (event.target.value === "otro") {
      setShowImageSelector(true)
    } else {
      setShowImageSelector(false)
    }
  }
  const navigate = useNavigate()


  useEffect(() => {
    ( async () => {
      try {
        if(!TokenService.getUser()){
          navigate('/admin');
        }
        const response = await AuthLinkProvider.getLinkById(id);
        if(response){
          setLink(response);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id, navigate]);

  const handleSaveLink = async(e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('id', id);
    form_data.append('name', link.name);
    form_data.append('title', link.title);
    form_data.append('description', link.description);
    form_data.append('image', link.image);
    form_data.append('btn_name', link.btn_name);
    form_data.append('url', link.url);
    form_data.append('detail_result', link.detail_result);
    form_data.append('contain_result', link.contain_result);
    try {
      await AuthLinkProvider.updatelink(form_data);
      setPictureValue();
      setLink({});
      navigate("/panel");
      window.location.reload();
    } catch (err) { 
      const response = err.response.data.error.message;
      setErrorMessage(response);

      if(response) {
        setError(true);
      }
    }

  }

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'file') {
      setPictureValue(e.target.files[0].name);
      value = e.target.files[0];
    }
    setLink((Link) => {
      return { ...Link, [name]: value };
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

      <Row className='align-items-center mt-5'>
        <div className="col-12 col-md-6 mx-auto">
          <Card className='shadow p-2'>
            <Card.Body>
              <Form method="post">
                <Row>
                  <Form.Group className='col-12 col-md-6' >
                    <Form.Label>Nombre del link. *</Form.Label>
                    <Form.Control name="name" placeholder='Nombre del link' required={true} id='link-nombre' onChange={handleChange} value={link?.name ?? ''}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-md-6 mt-2 mt-sm-0'>
                    <Form.Label>Titulo.</Form.Label>
                    <Form.Control name="title" placeholder='Titulo' id='link_titulo' onChange={handleChange} value={link?.title ?? ''}/>
                  </Form.Group>
                </Row>
                <Form.Group className='mt-2'>
                  <Form.Label>Descripcion.</Form.Label>
                  <div>
                    <textarea className='w-100' rows={5} id='link_descripcion' name='description' onChange={handleChange} value={link?.description ?? ''}></textarea>
                  </div>
                </Form.Group>
                <Row className='mt-sm-1'>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                    <Form.Label>Nombre del boton. *</Form.Label>
                    <Form.Control name="btn_name" placeholder='Nombre del boton' id='boton_nombre' required={true} onChange={handleChange} value={link?.btn_name ?? ''}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                    <Form.Label>Link del boton. *</Form.Label>
                    <Form.Control placeholder='Link del boton' id='boton_link' name='url' required={true} onChange={handleChange} value={link?.url ?? ''}/>
                  </Form.Group>
                </Row>
                <Form.Group className='mt-2'>
                  <Form.Label>Imagen.</Form.Label>
                  <Form.Select id='imagen_select' name='imagen_select' onChange={handleShowImageSelector} >
                    <option disabled="true">Selecciona una imagen</option>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>
                {showImageSelector ?
                  <Form.Group controlId="formFile" className="mt-2">
                    <Form.Label>Seleccione una imagen. *</Form.Label>
                    <Form.Control type="file" id='imagen_otro_select' name='image' accept='image/x-png,image/gif,image/jpeg' onChange={handleChange} required={true} />
                  </Form.Group> : null}
                <p className='mt-4 text-center fw-bold'>Editar informacion del resultado.</p>
                <Row>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                    <Form.Label>Detalle del resultado.</Form.Label>
                    <Form.Control id='resultado_detalle' name='detail_result' placeholder='Detalle del resultado' onChange={handleChange} value={link?.detail_result ?? ''}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                    <Form.Label>Contenido del resultado.</Form.Label>
                    <Form.Control id='resultado_contenido' name='contain_result' placeholder='Contenido del resultado' onChange={handleChange} value={link?.contain_result ?? ''}/>
                  </Form.Group>
                </Row>
                <div className='d-grid gap-1 mt-3'>
                  <Button className="p-4" variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} type="submit" onClick={handleSaveLink}>
                    Modificar
                  </Button>
                  <Button className="p-4" variant="danger" size="lg" onClick={() => navigate('/panel')} style={{ fontWeight: 700, fontSize: "1em" }}>
                    Cancelar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
}

export default ModifyLink;