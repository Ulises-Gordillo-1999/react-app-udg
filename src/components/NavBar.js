import React from "react";
import CartWidget from "./CartWidget"
import { Navbar, Nav,Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">UDG Ventas</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link  href="/">Home</Nav.Link>
        <Nav.Link href="/Products">Products</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        <CartWidget/>
      </Form>
    </Navbar>
  );
}
