import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo2.png';
import navicon1 from '../assets/nav-icon1.png';
import navicon2 from '../assets/nav-icon2.webp';

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ""} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link 
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>

            <Nav.Link 
              href="#projetos"
              className={`nav-link ${activeLink === 'projetos' ? 'active' : ''}`}
              onClick={() => onUpdateActiveLink('projetos')}
            >
              Projetos
            </Nav.Link>

          </Nav>

          <span className="navbar-text">
            <div className="social-icon">

              <a 
                href="https://www.linkedin.com/in/fernanda-viana-higino-253b492a7/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navicon1} alt="LinkedIn" />
              </a>

              <a 
                href="https://github.com/Fernandavv" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={navicon2} alt="GitHub" />
              </a>

            </div>

            <button 
              className='vvd' 
              onClick={() => window.open('/Fernanda_Viana_CV.pdf', '_blank')}
            >
              <span>Baixar CV</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;