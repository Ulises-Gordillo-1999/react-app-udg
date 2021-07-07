import React, { useState, useEffect } from "react";
import Item from "./Item";
import { getFireStore } from "../Firebase/Firebase";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("menu");
    itemCollection.get().then((querySnapshot) => {
      setProductos(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(productos);

  return (
    <div className="row">
      {productos.map((element, index) => {
        return (
          <div className="col-xs-3 col-md-3 mb-3" key={element.id}>
            <Item
              key={index}
              name={element.name}
              id={element.id}
              precio={element.price}
              stock={element.available_quantity}
              image={element.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
