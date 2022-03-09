import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import webLogo from '../assets/logo.svg';
import TokenService from '../service/TokenService';
import { useState, useEffect } from "react";
import AuthLinkProvider from '../service/AuthLinkProvider';

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

const NavigationBar = ({navbarTitle, brandDisplay, settingsDisplay, logoWidth, logoHeight, href, logoutDisplay}) => {
  const [logo, setLogo] = useState({
    image: webLogo
  })
  useEffect(() => {
    ( async () => {
      try {
        const response = await AuthLinkProvider.getLogo();
        if(response){
          setLogo(response);
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
              src={logo.image || webLogo}
              width={logoWidth || "57px"}
              height={logoHeight || "57px"}
              className={brandDisplay || "d-none"}
              alt="Logo"
            />
          </a>
        </Navbar.Brand>
        <h1 className='mx-auto text-light' style={{fontSize: "36px", fontWeight: "700"}}>{navbarTitle}</h1>
        <Navbar.Text>
          <span className={settingsDisplay || "d-none"} style={{marginRight: "1rem"}}>
            <a href='/settings'>
              <i className='bi bi-gear-fill fa-lg text-light' style={{fontSize: "1.5em"}} ></i>
            </a>
          </span>
          <span className={logoutDisplay || "d-none"}>
            <a href='/admin' onClick={() => TokenService.removeUser()} to="/admin">
              <i className='bi bi-box-arrow-left fa-lg text-light' style={{fontSize: "1.5em"}} ></i>
            </a> 
          </span>
        </Navbar.Text>
      </Navbar>
    </Styles>
  )
};

export default NavigationBar;