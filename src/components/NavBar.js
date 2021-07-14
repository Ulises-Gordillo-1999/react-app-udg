import React from "react";
import CartWidget from "./CartWidget";
import Image from "react-bootstrap/Image";
import { UseCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillDisplayFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { BsPuzzleFill } from "react-icons/bs";

export default function NavBar() {
  const { cart } = UseCart();
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
        <Image
          width={64}
          height={64}
          className="mr-3"
          src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/283/5631205283_f8d8680e-7b4a-4b64-b7c9-ab9c318d7ec5.png?cb=1626055514"
          rounded
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home <BsHouseDoorFill />{" "}
          </Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Categories/consoles">
              Processors AMD
              <BsPuzzleFill />
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Categories/computing">
              {" "}
              Processors Intel <BsFillDisplayFill />
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Categories/cameras_accessories">
              Accessories
              <AiFillCamera />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/Cart/Content">
            Cart
            <CartWidget />
            <span className="badge badge-light">{cart.length}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
