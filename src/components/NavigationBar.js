import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.svg';


const Styles = styled.div`
  .navbar {
    background-color: #F23131;
    height: 6.563rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .navbar-brand {
    color: #FFFF;
  }
`

const NavigationBar = ({navbarTitle, brandDisplay, settingsDisplay}) => {

  return (
    <Styles>
      <Navbar>
        <Navbar.Brand>
          <a href='/'>
            <img
              src={logo}
              width="57"
              height="57"
              className={brandDisplay || "d-none"}
              alt="React Bootstrap logo"
            />
          </a>
        </Navbar.Brand>
        <h1 className='mx-auto text-light' style={{fontSize: "36px", fontWeight: "700"}}>{navbarTitle}</h1>
        <Navbar.Text>
          <span className={settingsDisplay}>
            <a href='/settings'>
              <i className='bi bi-gear-fill fa-lg text-light' style={{fontSize: "1.5em"}} ></i>
            </a>
          </span>
        </Navbar.Text>
      </Navbar>
    </Styles>
  )
};

export default NavigationBar;
