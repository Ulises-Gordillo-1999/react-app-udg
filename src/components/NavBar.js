import React from "react";
import CartWidget from "./CartWidget";
import Cart from "./Cart";
import { Navbar, Nav,Form, FormControl, Button, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">UDG Ventas</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        <CartWidget/>
      </Form>
    </Navbar>
  );
}
