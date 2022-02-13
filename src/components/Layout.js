import { Container } from "react-bootstrap";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <Container style={{position: "relative", minHeight: "calc(100vh - 105px - 123px)"}}>
      {props.children}
    </Container>
  );
};

export default Layout;
