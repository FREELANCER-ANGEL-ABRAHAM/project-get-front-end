import { Card, Row } from "react-bootstrap";
import CustomIcon from "./components/CustomIcon";
import success from "./assets/check.svg"
import React, {useState, useEffect} from 'react';
import AuthLinkProvider from "./service/AuthLinkProvider";
import { useLocation } from "react-router-dom";

const Result = (props) => {
  const [links, setLinks] = useState({
    detail_result: '',
    contain_result: ''
  });

  const location = useLocation();
  const id = location.state.idLink;
  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getLinkById(id);
        if(response){
          setLinks(response);
        }
      } catch (error) { 
        console.error(error);
      }
    })();
  }, [id]); 
  return (
    <Row className="m-2 m-md-0" style={{height: "60vh", overflow: "hidden"}}>
      <Card className="col-12 col-md-4 mx-auto my-auto d-flex shadow p-4 text-center" style={{border: "none"}}>
        <CustomIcon src={success} alt="icon" height={25}></CustomIcon>
        <Card.Title style={{fontWeight: "bold", fontSize: "1.5em"}}>{links.detail_result}</Card.Title>
        <Card.Body style={{fontSize: "1em"}}>{links.contain_result}</Card.Body>
      </Card>
    </Row>
  );
}

export default Result;
