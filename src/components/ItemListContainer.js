import React from "react";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  return (
    <div>
      <h1 style={{ color: "white" , textAlign:"center"}}> {props.greeting} </h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
