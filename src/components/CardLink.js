import React, { useState } from 'react';
import { Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from '../service/AuthLinkProvider';

const CardLink = ({ id, name, visibility, status, onStatusChange, count_click, rowActive }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleUpdateStatus = async (e) => {
    try {
      const values = {
        id,
        visibility,
        status: e.target.checked ? 'active' : 'disable',
      }
      if(values.status === 'active'){
        var current =  new Date();
        const dataActive = {
          id,
          active_at: current.toLocaleTimeString()
        }
        await AuthLinkProvider.updateActivetLink(dataActive);
      }
      else{
        const dataActive = {
          id,
          active_at: ''
        }
        await AuthLinkProvider.updateActivetLink(dataActive);
      }
      await AuthLinkProvider.updatelink(values);
      onStatusChange?.()
      window.location.reload();
    } catch (err) {
      const response = err.response.data.error.message;
      setErrorMessage(response);

      if (response) {
        setError(true);
      }
    }
  }

  const handleDeleteLink = async () => {
    try {
      await AuthLinkProvider.deleteLink(id);
      onStatusChange?.()
    } catch (err) {
      const response = err.response.data.error.message;
      setErrorMessage(response);

      if (response) {
        setError(true);
      }
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure that you want delete it</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Close</Button>
          <Button variant="primary" onClick={handleDeleteLink}>Delete</Button>
        </Modal.Footer>
      </Modal>

      <div className={rowActive ? "col-12" : "col-12 col-md-6 col-lg-4"}>
        <Card className="shadow-sm">
          <Card.Body>
            <div className={rowActive ? "row" : null}>
              <div className={rowActive ? "col-6" : null}>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.5em" }}>
                  {name}
                </Card.Title>
              </div>
              <div className={rowActive ? "col-6" : "d-grid gap-2 pt-2"} style={rowActive ? {textAlign: "right"} : null }>
                {rowActive ? <div>
                  <Form.Check
                    type="switch"
                    id="linkEnabled"
                    className='d-inline'
                    checked={status === 'active'}
                    onChange={handleUpdateStatus}
                    style={{ marginRight: "5px" }}
                  />
                  {error && ( 
                    <div className="p-2">
                      <Alert variant={'danger'} className="">
                        {errorMessage}
                      </Alert>
                    </div>
                  )}
                  <Button variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em", marginRight: "5px" }} onClick={() => navigate(`/modify/${id}`)}>
                    <i class="bi bi-pencil"></i>
                  </Button>
                  <Button variant="danger" size="lg" style={{ fontWeight: 700, fontSize: "1em", marginRight: "5px" }} onClick={handleShow}>
                    <i class="bi bi-trash"></i>
                  </Button>
                </div> : <div className='row gap-2 m-1'>
                  <Button className="p-4" variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={() => navigate(`/modify/${id}`)}>
                    Modificar
                  </Button>
                  <Button className="p-4" variant="danger" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={handleShow}>
                    Eliminar
                  </Button>
                  <Form.Check
                    className="mt-1"
                    type="switch"
                    id="linkEnabled"
                    label="Activar este link"
                    checked={status === 'active'}
                    onChange={handleUpdateStatus}
                  />
                  <label>Cantidad de Click: {count_click}</label>
                  {status === 'active' && (
                    <label>URL: <a href={`/${id}`} className="text-muted">{process.env.REACT_APP_API_URL+"/"+id}</a></label>
                  )}
                  {error && (
                    <div className="mt-2">
                      <Alert variant={'danger'} className="mt-2">
                        {errorMessage}
                      </Alert>
                    </div>
                  )}
                </div>}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardLink;
