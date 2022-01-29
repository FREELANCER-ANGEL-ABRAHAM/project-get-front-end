import styled from "styled-components";

const Styles = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #C8000C;
    color: #FFFF;
    font-size: 2.25em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem;
`

const CustomButton = ({ className, text }) => {
  return (
    <Styles className={className}>
        {text}
    </Styles>
  );
};

export default CustomButton;
