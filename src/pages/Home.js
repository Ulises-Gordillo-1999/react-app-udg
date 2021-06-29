import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import image from '../assets/home.gif'

//Bootstrap
//import Container from "react-bootstrap/Container";
//import Image from "react-bootstrap/Image";

//Imagen

function Home() {
  return (
    <div className="container">
      <img src={image} className="animate__animated animate__hinge" alt="" />
      <ItemListContainer />
    </div>
  );
}

export default Home;
