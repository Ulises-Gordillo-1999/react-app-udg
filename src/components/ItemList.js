import React, { useState } from "react";
import Viaje from "./Viaje";
//import Cart from "./Cart";
import { CardDeck } from "react-bootstrap";

const ItemList = ({ viajes }) => {
  return (
    <div>
      <CardDeck>
      {viajes.map((viajes) => (
          <Viaje key={viajes.id}  viajes={viajes} />
      ))}
      </CardDeck>
    </div>
  );
};

export default ItemList;
