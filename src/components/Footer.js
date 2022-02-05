import React from 'react';
import styled from 'styled-components';

function Footer() {

  const Footer = styled.footer`
    position: sticky;
    width: 100%;
    height: 7.688rem;
    background: #F23131;
    text-align center;
    color: white;
    margin-top: 5rem;

    &:before {
      content:"";
      position:absolute;
      top:-45px;
      height:45px;
      left:0;
      right:0;
      background:linear-gradient(to bottom left, transparent 49%, #F23131 50%);
    }
  `

  return (
    <Footer>
      <h1>Lol</h1>
    </Footer>
  );
}

export default Footer;
