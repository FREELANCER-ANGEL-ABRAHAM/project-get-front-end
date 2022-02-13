import React from 'react';
import styled from 'styled-components';

function Footer({actionText, actionHref}) {

  const Footer = styled.footer`
    position: relative;
    height: 7.688rem;
    background: #F23131;
    color: white;

    .copyright {
      position: absolute;
      width: 100%;
      color: #fff;
      line-height: 40px;
      font-size: 0.75em;
      font-weight: 400;
      text-align: center;
      bottom:0;
    }

    .action {
      position: absolute;
      width: 100%;
      color: #fff;
      line-height: 40px;
      font-size: 0.875rem;
      font-weight: 700;
      text-align: center;
      bottom:3rem;
    }
  `

  return (
    <Footer>
      <a href={actionHref}>
        <p className="action">
          {actionText}
        </p>
      </a>
      <p className="copyright">
        <span style={{fontWeight: "700"}}>Copyright</span> © Red Crecer
      </p>
    </Footer>
  );
}

export default Footer;
