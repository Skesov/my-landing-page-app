import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Skesov</Navbar.Brand>
        {props.showMenu ? (
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#greeting">Приветсвие</Nav.Link>
                <Nav.Link href="#background">Прошлое</Nav.Link>
                <Nav.Link href="#stack">Что я умею</Nav.Link>
                <Nav.Link href="#contacts">Как со мной связаться</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        ) : null}
      </Container>
    </Navbar>
  );
}

export default Header;
