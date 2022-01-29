import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.svg'

const Styles = styled.div`
  .navbar {
    background-color: #F23131;
    height: 6.563rem;
    padding-left: 1rem;
  }

  .navbar-brand {
    color: #FFFF;
  }
`

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar>
        <Navbar.Brand>
          <img
            src={logo}
            width="57"
            height="57"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </Styles>
  )
};

export default NavigationBar;
