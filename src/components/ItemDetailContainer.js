import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getFireStore } from "../Firebase/Firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  let { Products_id } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("menu");
    const oneItem = itemCollection.where("id", "==", Products_id);
    oneItem.get().then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      setItem(temp[0]);
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div id="container" className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-auto">
              <div
                className="spinner-border text-dark"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="container"
          className="container animate__animated animate__rotateInDownLeft"
        >
          <div className="row ">
            {item !== null ? (
              <ItemDetail
                name={item.name}
                id={item.id}
                precio={item.price}
                stock={item.stock}
                image={item.image}
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
