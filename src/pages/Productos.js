import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imagen from "../assets/Products.gif";

function Productos() {
  return (
    <div className="container">
      <Image src={imagen} className="animate__animated animate__bounceInUp" />
    </div>
  );
}

export default Productos;
