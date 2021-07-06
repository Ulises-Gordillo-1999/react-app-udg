import React, { useState, useEffect } from "react";
//import CardColumns from "react-bootstrap/CardColumns";
import Item from "./Item";
import section from "../assets/ecommerce.jpg";
import "./Styles.css";
import {getFireStore} from '../Firebase/Firebase'

function Consoles() {
  const [consoles, setConsoles] = useState([]);
  useEffect(() => {
    const db = getFireStore();
   const itemCollection = db.collection("procesadores-intel")
   itemCollection.get().then((querySnapshot) => {
    setConsoles(querySnapshot.docs.map(doc=> doc.data()));
  })   
    //getInformationCon();
  }, []);
  
  /*const getInformationCon = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144"
    );
    const users = await data.json();
    setConsoles(users.results);
  };*/

  return (
    <>
    {console.log(consoles)}
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
                  name={element.title}
                  id={element.id}
                  precio={element.price}
                  stock={element.available_quantity}
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
