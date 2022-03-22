import React, { useState } from 'react';
import { Card, Button, Form, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthLinkProvider from '../service/AuthLinkProvider';
import swal from 'sweetalert';

const CardLink = ({ id, name, visibility, status, onStatusChange, rowActive, count_click, }) => {
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

  const copyLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/link/${id}`)
    swal("Link copiado exitosamente.", "El link se ha copiado a tu portapapeles.", "success");
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


      <div className={rowActive ? "row mb-2 mx-auto" : "col-12 col-md-6 col-lg-4"} id='panelContainer'>
        <Card className="shadow-sm h-100 testCard">
          <Card.Body>
            <div className={rowActive && "row"}>
              <Card.Title className={rowActive && "col-12 col-md-6"} style={{ fontWeight: "600", fontSize: "1.5em" }}>
                {name}
              </Card.Title>
              <div className={rowActive ? "col-12 col-md-6" : "d-grid gap-2 pt-2"} style={rowActive && { textAlign: "right" }}>
                <Button className="p-4 col-12 col-md-auto mb-2 mb-md-0" variant="primary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={() => navigate(`/modify/${id}`)}>
                  {rowActive ? <i class="bi bi-pencil-fill"></i> : "Modificar"}
                </Button>
                {status === 'active' && (
                  <Button className="p-4 col-12 col-md-auto mb-2 mb-md-0" variant="secondary" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={ () => copyLink() }>
                    {rowActive ? <i class="bi bi-clipboard-fill"></i> : "Copiar link"}
                  </Button>
                )}
                <Button className="p-4 col-12 col-md-auto" variant="danger" size="lg" style={{ fontWeight: 700, fontSize: "1em" }} onClick={handleShow}>
                  {rowActive ? <i class="bi bi-trash-fill"></i> : "Eliminar"}
                </Button>
                <Form.Check
                  className={rowActive ? "d-flex justify-content-md-end" : "mt-1"}
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