import React from "react";
import ItemList from "./ItemList";

//Bootstrap
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";

function ItemListContainer() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
