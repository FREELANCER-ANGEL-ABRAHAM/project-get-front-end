import React, { useState } from 'react';
import { Card, Button, Form, Alert, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from '../service/AuthLinkProvider';

const CardRow = ({ id, name, visibility, status, onStatusChange }) => {
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


      <div className="col-12">
        <Card className="shadow-sm">
          <Card.Body>
            <Row>
              <div className='col-6'>
                <Card.Title style={{ fontWeight: "600", fontSize: "1.5em" }}>
                  {name}
                </Card.Title>
              </div>
              <div className='col-6' style={{ textAlign: "right" }}>

                <Form.Check
                  type="switch"
                  id="linkEnabled"
                  className='d-inline'
                  checked={status === 'active'}
                  onChange={handleUpdateStatus}
                  style={{marginRight: "5px"}}
                />
                <Button variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em", marginRight: "5px" }} onClick={() => navigate(`/modify/${id}`)}>
                  <i class="bi bi-pencil"></i>
                </Button>
                <Button variant="danger" size="lg" style={{ fontWeight: 700, fontSize: "1em", marginRight: "5px" }} onClick={handleShow}>
                  <i class="bi bi-trash"></i>
                </Button>
              </div>
            </Row>

            <div className="">
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

export default CardRow;