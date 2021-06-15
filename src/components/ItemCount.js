import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";
import suma from "../assets/sumar.png";
import resta from "../assets/restar.png";

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
      <Button variant="outline-primary" onClick={Decrementar}>
        <img src={resta} width="30" height="30"></img>
      </Button>
      <label id="labelItemcount">{clicks}</label>
      <Button variant="outline-primary" onClick={Incrementar}>
        <img src={suma} width="30" height="30"></img>
      </Button>
    </ButtonGroup>
  );
};

export default ItemCount;
