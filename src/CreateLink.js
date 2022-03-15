import React, {useEffect, useState} from 'react';
import { Form, Row, Card, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from './service/AuthLinkProvider';
import TokenService from './service/TokenService';
import Sinstagram from './assets/socialmedia-logos/instagram.svg'
import SyoutubeIcon from './assets/socialmedia-logos/youtube-svgrepo-com.svg'
import Stwitter from './assets/socialmedia-logos/twitter-svgrepo-com.svg'
import Sfacebook from './assets/socialmedia-logos/facebook-svgrepo-com.svg'

function CreateLink() {

  const [showImageSelector, setShowImageSelector] = React.useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [link, setLink] = useState({
    name: '',
    title: '',
    description: '',
    btn_name: '',
    url: '',
    image: [],
    detail_result: '',
    contain_result: '',
    count_click: 0
  });
  const navigate = useNavigate()


  useEffect(() => {
    ( async () => {
      if(!TokenService.getUser()){
        navigate('/admin');
      }
    })();
  }, [navigate]);

  const handleShowImageSelector = (event) => {
    if (event.target.value === "otro") {
      setShowImageSelector(true)
    } else {
      setShowImageSelector(false)
      handleChangeSelect(event);
    }
  }

  const handleSaveLink = async(e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('name', link.name);
    form_data.append('title', link.title);
    form_data.append('description', link.description);
    form_data.append('image', link.image);
    form_data.append('btn_name', link.btn_name);
    form_data.append('url', link.url);
    form_data.append('detail_result', link.detail_result);
    form_data.append('contain_result', link.contain_result);
    form_data.append('status', 'disable');
    form_data.append('visibility', 'visible');
    form_data.append('count_click', 0);
    try {
      console.log(link);
      const response = await AuthLinkProvider.saveLink(form_data);
      if(response === undefined){
        const re = await TokenService.getNewTokenCredentials();
        TokenService.setUser(re);
        window.location.reload();
      }
      else{
        setLink({});
        navigate("/panel");
      }
      
    } catch (err) {
      const response = err.response.data.error.message;
      setErrorMessage(response);
      if(response) {
        setError(true);
      }
      window.scrollTo(0, 0);
    }

  }

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'file') {
      value = e.target.files[0];
    }
    setLink((Link) => {
      return { ...Link, [name]: value };
    });
  };

  const handleChangeSelect = (e) => {
    let { name, value } = e.target;
    name = 'image';
    if (value === "youtube") {
      value = SyoutubeIcon;
    }
    if (value === "instagram") {
      value = Sinstagram;
    }
    if (value === "facebook") {
      value = Sfacebook;
    }
    if (value === "twitter") {
      value = Stwitter;
    }
    if(value === "ninguno"){
      value = "";
    }
    setLink((Link) => {
      return { ...Link, [name]: value };
    });
  }

  return (
    <>
      {error && (
        <div className="mt-2">
          <Alert variant={'danger'} className="mt-2">
            {errorMessage}
          </Alert>
        </div>
      )}

      <Row className='align-items-center mt-4 mb-5'>
        <div className="col-12 col-md-6 mx-auto">
          <Card className='shadow p-2'>
            <Card.Body>
              <Form method="post">
                <Row>
                  <Form.Group className='col-12 col-md-6' >
                    <Form.Label>Nombre del link. *</Form.Label>
                    <Form.Control name="name" placeholder='Nombre del link' onChange={handleChange} value={link?.name ?? ''} required={true}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-md-6 mt-2 mt-sm-0'>
                    <Form.Label>Titulo.</Form.Label>
                    <Form.Control name="title" placeholder='Titulo' onChange={handleChange} value={link?.title ?? ''}/>
                  </Form.Group>
                </Row>
                <Form.Group className='mt-2'>
                  <Form.Label>Descripcion.</Form.Label>
                  <div>
                    <textarea className='w-100' rows={5} name='description' onChange={handleChange} value={link?.description ?? ''}></textarea>
                  </div>
                </Form.Group>
                <Row className='mt-sm-1'>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                    <Form.Label>Nombre del boton. *</Form.Label>
                    <Form.Control name="btn_name" placeholder='Nombre del boton' required={true} onChange={handleChange} value={link?.btn_name ?? ''}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-sm-0'>
                    <Form.Label>Link del boton. *</Form.Label>
                    <Form.Control placeholder='Link del boton' name='url' required={true} onChange={handleChange} value={link?.url ?? ''}/>
                  </Form.Group>
                </Row>
                <Form.Group className='mt-2'>
                  <Form.Label>Imagen.</Form.Label>
                  <Form.Select name='imagen_select' onChange={handleShowImageSelector} >
                    <option disabled={true} selected={true}>Selecciona una imagen</option>
                    <option value="ninguno">Ninguno</option>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>
                {showImageSelector ?
                  <Form.Group className="mt-2">
                    <Form.Label>Seleccione una imagen. *</Form.Label>
                    <Form.Control type="file" name='image' accept='image/x-png,image/gif,image/jpeg' onChange={handleChange} required={true} />
                  </Form.Group> : null}
                <p className='mt-4 text-center fw-bold'>Editar informacion del resultado.</p>
                <Row>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                    <Form.Label>Detalle del resultado.</Form.Label>
                    <Form.Control name='detail_result' placeholder='Detalle del resultado' onChange={handleChange} value={link?.detail_result ?? ''}/>
                  </Form.Group>
                  <Form.Group className='col-12 col-sm-6 mt-2 mt-0'>
                    <Form.Label>Contenido del resultado.</Form.Label>
                    <Form.Control name='contain_result' placeholder='Contenido del resultado' onChange={handleChange} value={link?.contain_result ?? ''}/>
                  </Form.Group>
                </Row>
                <div className='d-grid gap-1 mt-3'>
                  <Button className="p-4" variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} type="submit" onClick={handleSaveLink}>
                    Crear
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

export default CreateLink;