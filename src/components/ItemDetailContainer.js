import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css'

//Bootstrap
//import Spinner from "react-bootstrap/Spinner";
//import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([null]);

  let { Products_id } = useParams();
  useEffect(() => {
    getInformation();
  }, []);

  const getInformation = async () => {
    const data = await fetch(
      `https://api.mercadolibre.com/items/${Products_id}?include_attributes=all`
    );
    const users = await data.json();
    //console.log(users)
    setItem(users);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div id="container"  className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-auto">
              <div className="spinner-border text-dark" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="container" className="container animate__animated animate__rotateInDownLeft">
          <div className="row ">
            {item !== null ? (
              <ItemDetail
                name={item.title}
                id={item.id}
                precio={item.price}
                stock={item.available_quantity}
                image={
                  item.pictures ? item.pictures[0].secure_url : item.thumbnail
                }
              />
            ) : (
              <p>cargando</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
