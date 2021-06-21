import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import imagen from '../assets/about.gif'

function About() {
    return (
        <Container>
            <Image src={imagen} fluid />
        </Container>
    )
}

export default About
