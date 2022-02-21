import { Button, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import webLogo from '../assets/logo.svg';
import TokenService from '../service/authToken';
import { useState, useEffect } from "react";
import AuthLinkProvider from '../service/authLink';

const Styles = styled.div`
  .navbar {
    background-color: #F23131;
    height: 6.563rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .navbar-brand {
    color: #FFFF;
    margin-right: 0;
  }
`

const NavigationBar = ({navbarTitle, brandDisplay, settingsDisplay, logoWidth, logoHeight, href, logoutTextDisplay}) => {
  const [logo, setLogo] = useState({
    image: webLogo
  })
  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getLogo();
        //console.log(response);
        if(response){
          setLogo(response.image);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Styles>
      <Navbar>
        <Navbar.Brand>
          <a href={href || '/'}>
            <img
              src={logo || webLogo}
              width={logoWidth || "57px"}
              height={logoHeight || "57px"}
              className={brandDisplay || "d-none"}
              alt="Logo"
            />
          </a>
        </Navbar.Brand>
        <h1 className='mx-auto text-light' style={{fontSize: "36px", fontWeight: "700"}}>{navbarTitle}</h1>
        <Navbar.Text>
          <span className={settingsDisplay}>
            <a href='/settings'>
              <i className='bi bi-gear-fill fa-lg text-light' style={{fontSize: "1.5em"}} ></i>
            </a>
            <a href='/admin' onClick={() => TokenService.removeUser()} to="/admin" className={logoutTextDisplay || "d-none"}>
              <p>
                logout
              </p>
            </a>
          </span>
        </Navbar.Text>
      </Navbar>
    </Styles>
  )
};

export default NavigationBar;
