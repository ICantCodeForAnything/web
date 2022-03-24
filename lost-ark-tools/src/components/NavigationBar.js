import React from "react";
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
        );
    }
}