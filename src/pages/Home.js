import React from "react";
import ItemListContainer from "../components/ItemListContainer";
//import image from '../assets/home.gif'
import section from '../assets/ecommerce.jpg'
import '../components/Styles.css'

//Bootstrap
//import Container from "react-bootstrap/Container";
//import Image from "react-bootstrap/Image";

//Imagen

function Home() {
  return (
    <>
    <img id="image" src={section} className="img-fluid w-100 animate__animated animate__zoomInDown" alt="..."/>
    <div className="container">
      <ItemListContainer />
    </div>
    </>
  );
}

export default Home;
