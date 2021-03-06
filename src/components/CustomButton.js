import styled from "styled-components";

const Styles = styled.button`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 772px) {
    font-size: 1.5rem;
  }
  @media (min-width: 996px) {
    font-size: 2.25rem;
  }
  border: none;
  border-radius: 5px;
  background-color: #F23131;
  color: #FFFF;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
 
  width: 100%;
  &:hover {
    background-color: #B01313;
    color: white
  }
`

const CustomButton = ({ children, onClick, type, fontSize, style, href, target, id }) => {
  return (
    <Styles className="custom-button" onClick={onClick} type={type} fontSize={fontSize} style={style} id={id}>
      {children}
    </Styles>
  );
};

export default CustomButton;