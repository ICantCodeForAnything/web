import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Mokoko">Mokoko</Nav.Link>
          <Nav.Link as={Link} to="/MariShop">Mari Shop Calculator</Nav.Link>
          <Nav.Link as={Link} to="/MarketTracker">Market Tracker</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
}