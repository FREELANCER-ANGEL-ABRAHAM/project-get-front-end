import { useState, useEffect } from "react";
import { Row, Pagination } from "react-bootstrap";
import CardLink from "./components/CardLink";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useNavigate } from "react-router-dom";
import LinkSearchModal from "./components/LinkSearchModal";
import AuthLinkProvider from "./service/authLink";

const Panel = () => {

  const navigate = useNavigate()

  const [links, setLinks] = useState([]);
  
  const [refreshCount, setRefreshCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  
  const pages = [];
  for(let i=1; i <= totalPages; i++){
    pages.push(i);
  }
  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getAllLinks(currentPage);
        setLinks(response.docs);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [refreshCount, currentPage]);

  const refresh = () => {
    setRefreshCount(refreshCount + 1);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const gotoPage = (page) => {
    setCurrentPage(page);
  }
  const backPage = () => {
    setCurrentPage(currentPage - 1);
  }
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <Row className="mt-2 gy-4">
        {
          links.map((item) => (
            <CardLink
              key={item['_id']}
              id={item['_id']}
              name={item['name']}
              visibility={item['visibility']}
              status={item['status']}
              onStatusChange={refresh}
            />
          ))
        }
      </Row>

      <Fab
        mainButtonStyles={{ backgroundColor: "#F23131" }}
        actionbuttonstyles={{ backgroundColor: "blue" }}
        icon={<i className="bi bi-list"></i>}
        alwaysShowTitle={true}
      >
        <Action text="Crear link" onClick={() => navigate('/create')} >
          <i className="bi bi-plus"></i>
        </Action>
        <Action text="Buscar link" onClick={() => setModalShow(true)} >
          <i className="bi bi-search"></i>
        </Action>
      </Fab>

      <LinkSearchModal show={modalShow} onHide={() => setModalShow(false)} />

      <Pagination className="d-flex justify-content-center mt-3">
        <Pagination.Prev disabled={ currentPage === 1 } onClick={backPage}/>
        {
          pages.map((item) => (
            <Pagination.Item onClick={() => gotoPage(item)}>{item}</Pagination.Item>
          ))
        }
        <Pagination.Next disabled={ totalPages === currentPage } onClick={nextPage}/>
      </Pagination>
    </>
  );
};

export default Panel;
