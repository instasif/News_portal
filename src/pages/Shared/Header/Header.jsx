import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LeftsideNav from "../LeftsideNav/LeftsideNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/">All News</Link>
            </Nav.Link>
            <Nav.Link className="text-dark">Pricing</Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftsideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
