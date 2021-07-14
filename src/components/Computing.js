import React, { useState, useEffect } from "react";
import Item from "./Item";
import section from "../assets/ecommerce.jpg";
import "./Styles.css";
import { getFireStore } from "../Firebase/Firebase";

function Computing() {
  const [computacion, setComputacion] = useState([]);

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("menu");
    const oneItem = itemCollection.where(
      "category",
      "==",
      "Procesadores-intel"
    );
    oneItem.get().then((querySnapshot) => {
      setComputacion(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <img
        src={section}
        id="image"
        className="img-fluid w-100 animate__animated animate__jackInTheBox"
        alt="..."
      />
      <div className="container d-flex justify-content-center align-items-center h100">
        <div className="row">
          {computacion.map((element, index) => {
            return (
              <div className="col-sm-3" key={element.id}>
                <Item
                  key={index}
                  name={element.name}
                  id={element.id}
                  precio={element.price}
                  stock={element.stock}
                  image={element.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Computing;
