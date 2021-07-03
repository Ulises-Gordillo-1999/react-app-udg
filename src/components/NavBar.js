import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillDisplayFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { BsPuzzleFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <Navbar
      id="navbar"
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand as={Link} to="/">
        {" "}
        UDG Ventas{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home <BsHouseDoorFill />{" "}
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About <BsFillPersonLinesFill />{" "}
          </Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Categories/consoles">
              Consoles y video game
              <BsPuzzleFill />
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Categories/computing">
              {" "}
              Computing <BsFillDisplayFill />
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Categories/cameras_accessories">
              Cameras and accessories
              <AiFillCamera />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Cart/Content">
            Cart
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
