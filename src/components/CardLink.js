import React, { useState } from 'react';
import { Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from '../service/authLink';

const CardLink = ({ id, name, visibility, status, onStatusChange }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  
  const handleShow = () => setShow(true);

  const handleUpdateStatus = async (e) => {
    try {
      console.log(id);
      const values = {
        id,
        visibility,
        status: e.target.checked ? 'active' : 'disable',
      }
      await AuthLinkProvider.updatelink(values);
      onStatusChange?.()
      window.location.reload();
    } catch (err) {
      const response = err.response.data.error.message;
      setErrorMessage(response);

      if(response) {
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

      if(response) {
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


      <div className="col-12 col-md-6 col-lg-4">
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title style={{fontWeight: "600", fontSize: "1.5em"}}>
              {name}
            </Card.Title>
            <div className="d-grid gap-2 pt-2">
              <Button className="p-4" variant="primary" size="lg" style={{fontWeight: 700, fontSize: "1em"}} onClick={() => navigate(`/modify/${id}`)}>
                Modificar
              </Button>
              <Button className="p-4" variant="danger" size="lg" style={{fontWeight: 700, fontSize: "1em"}} onClick={handleShow}>
                Eliminar
              </Button>
              <Form.Check
                className="mt-1"
                type="switch"
                id="linkEnabled"
                label="Activar este link"
                checked={ status === 'active'}
                onChange={handleUpdateStatus}
              />
              {error && (
                <div className="mt-2">
                  <Alert variant={'danger'} className="mt-2">
                    {errorMessage}
                  </Alert>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardLink;