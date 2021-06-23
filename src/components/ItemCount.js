import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import  './ItemCount.css';
import suma from  '../assets/sumar.png';
import resta from  '../assets/restar.png';

const ItemCount = ({ stock, inicial }) => {
  function Incrementar() {
    if (clicks < stock) {
      setClicks(clicks + inicial);
    } else {
      setClicks(clicks);
    }
  }
  function Decrementar() {
    if (clicks > inicial) {
      setClicks(clicks - inicial);
    } else {
      setClicks(clicks);
    }
  }

  const [clicks, setClicks] = React.useState(inicial);

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-info" onClick={Decrementar}>
        <Image src={resta} width="30" height="30"></Image>
      </Button>
      <label id="labelItemcount">{clicks}</label>
      <Button variant="outline-info" onClick={Incrementar}>
        <Image src={suma} width="30" height="30"></Image>
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
