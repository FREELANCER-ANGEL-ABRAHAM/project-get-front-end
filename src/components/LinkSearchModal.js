import { React, useState, useEffect } from 'react';
import { Button, Form, Row, Pagination } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import AuthLinkProvider from '../service/authLink';
import CardRow from './CardRow';

function LinkSearchModal(props) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [links, setLinks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [refreshCount, setRefreshCount] = useState(0);

  const pages = [];
  for(let i=1; i <= totalPages; i++){
    pages.push(i);
  }
  const searchLinks = async() => {
    try{
      const response = await AuthLinkProvider.getAllLinks(currentPage, search, 6);
      setLinks(response.docs);
      setTotalPages(response.totalPages);
    }catch (err){
      await console.log(err);
    }
  }

  useEffect(() => {
    ( async () => {
      try {
        searchLinks();
      } catch (error) {
        console.error(error);
      }
    })();
  }, [refreshCount, currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  
  const refresh = () => {
    setRefreshCount(refreshCount + 1);
  }

  const gotoPage = (page) => {
    setCurrentPage(page);
  }
  const backPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const updateInputValue = (evt) => {
    const value = evt.target.value;

    setSearch(value);
  }
  return (  
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Encontrar un link.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control value={search} type="text" placeholder="Ej. Link de imagenes de carros." onChange={evt => updateInputValue(evt)}/>
        <Row className="mt-2 gy-4">
        {
          links.length > 0 ? links.map((item) => (
            <CardRow
              key={item['_id']}
              id={item['_id']}
              name={item['name']}
              visibility={item['visibility']}
              status={item['status']}
              onStatusChange={refresh}
            />
          )) : <p className='m-5 text-center'>
            No se encontraron coincidencias.
          </p>
        }
        </Row>

        <Pagination className="d-flex justify-content-center mt-3">
          <Pagination.Prev disabled={ currentPage === 1 } onClick={backPage}/>
          {
            pages.map((item) => (
              <Pagination.Item onClick={() => gotoPage(item)}>{item}</Pagination.Item>
            ))
          }
          <Pagination.Next disabled={ totalPages === currentPage } onClick={nextPage}/>
        </Pagination>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={searchLinks}>Buscar</Button>
        <Button variant='danger' onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LinkSearchModal;
