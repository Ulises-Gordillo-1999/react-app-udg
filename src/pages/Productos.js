import React from 'react'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import imagen from '../assets/Products.gif'


function Productos() {
    return (
        <Container >
          <Image src={imagen} />
        </Container>
    )
}

export default Productos
