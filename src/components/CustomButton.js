import styled from "styled-components";

const CustomButton = ({ className, children, onClick, type, fontSize }) => {
  return (
    <Styles className="custom-button" onClick={onClick} type={type} fontSize={fontSize}>
      {children}
    </Styles>
  );
};

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
  padding: 1rem;
  width: 100%;

  &:hover {
    background-color: #B01313;
  }
`

export default CustomButton;
