import react from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import image from './Roma.jpg';
import image1 from './Barcelona.jpg';
import image2 from './kioto_japon.jpeg';
import image3 from './chiangmai.jpg';

function ProductCard(){
    return( 
        <CardDeck>
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>ROMA, ITALIA</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" size="lg" block>AGREGAR AL CARRITO</Button>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
            <Card.Title>BARCELONA, ESPAÑA</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" size="lg" block>AGREGAR AL CARRITO</Button>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
            <Card.Title>KIOTO, JAPON</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" size="lg" block>AGREGAR AL CARRITO</Button>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
            <Card.Title>CHIANG MAI, TAILANDIA</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" size="lg" block>AGREGAR AL CARRITO</Button>
            </Card.Footer>
        </Card>
        </CardDeck>
    )
}
export default ProductCard;