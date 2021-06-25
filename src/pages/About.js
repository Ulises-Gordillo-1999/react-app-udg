import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imagen from "../assets/about.gif";

function About() {
  return (
    <div className="container">
      <Image src={imagen} className="animate__animated animate__bounceInRight" />
    </div>
  );
}

export default About;
