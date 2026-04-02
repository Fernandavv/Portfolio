import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import navicon1 from '../assets/nav-icon1.png';
import navicon2 from '../assets/nav-icon2.webp';
import gmailIcon from '../assets/icone3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            
            <p>Entre em contato</p>

            <div className="social-icon">
              <a 
    href="https://www.linkedin.com/in/fernanda-viana-higino-253b492a7/" 
    target="_blank" 
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <img src={navicon1} alt="LinkedIn" />
  </a>

  <a 
    href="https://github.com/Fernandavv" 
    target="_blank" 
    rel="noopener noreferrer"
    title="GitHub"
  >
    <img src={navicon2} alt="GitHub" />
  </a>

        <a href="mailto:seuemail@gmail.com" title="Email">
  <img src={gmailIcon} alt="Email" />
</a>
            </div>

            <p>© 2026 Fernanda Viana</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};