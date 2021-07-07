import React, { useState, useEffect } from "react";
import Item from "./Item";
import section from "../assets/ecommerce.jpg";
import "./Styles.css";
import { getFireStore } from "../Firebase/Firebase";

function Consoles() {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("menu");
    const oneItem = itemCollection.where("category", "==", "Procesadores-amd");
    oneItem.get().then((querySnapshot) => {
      setConsoles(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(consoles);

  return (
    <>
      <img
        id="image"
        src={section}
        className="img-fluid w-100 animate__animated animate__flipInY"
        alt="..."
      />
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="row">
          {consoles.map((element, index) => {
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
    </>
  );
}

export default Consoles;
