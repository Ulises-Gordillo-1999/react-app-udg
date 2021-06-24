import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        UDG Ventas
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/Products">
          Products
        </Nav.Link>
        <Nav.Link as={Link} to="/About">
          About
        </Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/Categories/consoles">
            Consoles y video game
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Categories/computing">
            Computing
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Categories/cameras_accessories">
            Cameras and accessories
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        <CartWidget />
      </Form>
    </Navbar>
  );
}
