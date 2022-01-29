import {Card} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.Card`
  background-color: blue;
`

const CustomCard = (props) => {
  return (
    <Styles>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Styles>
  );
};

export default CustomCard;
