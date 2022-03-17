import React, { useState } from 'react';
import { Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from '../service/AuthLinkProvider';

const CardLink = ({ id, name, visibility, status, onStatusChange, rowActive, count_click }) => {
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

  let linkName = name

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


      <div className={rowActive ? "row mb-2 mx-auto" : "col-12 col-md-6 col-lg-4"}>
        <Card className="shadow-sm">
          <Card.Body>
            <div className={rowActive && "row"}>
              <Card.Title className={rowActive && "col-12 col-md-6"} style={{ fontWeight: "600", fontSize: "1.5em" }}>
                {name}
              </Card.Title>
              <div className={rowActive ? "col-12 col-md-6" : "d-grid gap-2 pt-2"} style={rowActive && { textAlign: "right" }}>
                <Button className="p-4 col-12 col-md-auto mb-2 mb-md-0" variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={() => navigate(`/modify/${id}`)}>
                  {rowActive ? <i class="bi bi-pencil-fill"></i> : "Modificar"}
                </Button>
                <Button className="p-4 col-12 col-md-auto" variant="danger" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={handleShow}>
                  {rowActive ? <i class="bi bi-trash-fill"></i> : "Eliminar"}
                </Button>
                <Form.Check
                  className={ rowActive ? "d-flex justify-content-md-end" : "mt-1"}
                  type="switch"
                  id="linkEnabled"
                  label={rowActive ? "" : "Activar este link"}
                  checked={status === 'active'}
                  onChange={handleUpdateStatus}
                />
                <label>Cantidad de Click: {count_click}</label>
                {error && (
                  <div className="mt-2">
                    <Alert variant={'danger'} className="mt-2">
                      {errorMessage}
                    </Alert>
                  </div>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardLink;