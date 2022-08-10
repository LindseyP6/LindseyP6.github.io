import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <div id="header">
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand><img src="https://storage.cloud.google.com/all-cats/WinkLogo.png" alt="wink-logo" className="header-logo-wink"/></Navbar.Brand>
      {/* <img src="https://storage.cloud.google.com/all-cats/WinkLogo.png" alt="wink-logo-top-left" className="header-logo-wink"/> */}
      <div className="header-title-and-links">
        <h1>All Cats Are Beautiful</h1>
              <Nav className="header-navlinks">
              <div className="hover-4">
        <Nav.Link href="/">Home</Nav.Link>
        </div>
        <div className="hover-4">
        <Nav.Link href="/cats">Cats</Nav.Link>
        </div>
        <div className="hover-4">
        <Nav.Link href="/resources">Resources</Nav.Link>
        </div>
        <div className="hover-4">
        <Nav.Link href="/contact">Contact</Nav.Link>
        </div>

      </Nav>
      </div>
      <div id="header-contact-right">
        <a href="mailto:allcatsarebeautifulbktnr@gmail.com" target="_blank" alt="Mail" rel="noreferrer" className="hover-insta"><HiOutlineMail /></a>
        <a href="https://www.instagram.com/allcatsarebeautiful_bktnr/" target="_blank" rel="noreferrer" className="header-contact-link"><AiOutlineInstagram /></a>
      </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header