import { useState } from "react";
import { Row } from "react-bootstrap";
import CardLink from "./components/CardLink";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useNavigate } from "react-router-dom";
import LinkSearchModal from "./components/LinkSearchModal";


const Panel = () => {

  const navigate = useNavigate()

  let exampleDb = [
    <CardLink />,
    <CardLink />,
    <CardLink />,
    <CardLink />
  ]
  
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Row className="mt-2 gy-4">
        {exampleDb}
      </Row>

      <Fab
        mainButtonStyles={{ backgroundColor: "#F23131" }}
        actionbuttonstyles={{ backgroundColor: "blue" }}
        icon={<i className="bi bi-list"></i>}
        // event={event}
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

    </>
  );
};

export default Panel;
