import React from "react";
import ItemList from "./ItemList";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Importo las imagenes
import image0 from "../assets/Roma.jpg";
import image1 from "../assets/Barcelona.jpg";
import image2 from "../assets/kioto_japon.jpeg";
import image3 from "../assets/chiangmai.jpg";
//imagenes modal
import img0 from '../assets/Roma_modal.jpg'
import img1 from '../assets/Barcelona_modal.jpg'
import img2 from '../assets/Kioto_modal.jpg'
import img3 from '../assets/ChiangMai_modal.jpg'

function ItemListContainer() {
  return (
    <Container fluid>
      <Row>
        <ItemList  />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
