import React, { useState } from "react";
import Viaje from "./Viaje";
//import Cart from "./Cart";
import Item from "./Item"

//Importo las imagenes
import image0 from "../assets/Roma.jpg";
import image1 from "../assets/Barcelona.jpg";
import image2 from "../assets/kioto_japon.jpeg";
import image3 from "../assets/chiangmai.jpg";

function ItemList() {
  //Listado de viajes
  const [viajes, setViajes] = useState([
    {
      id: "V-01",
      name: "Roma, Italia",
      image: image0,
      stock: 8,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      precio: 3500,
    },
    {
      id: "V-02",
      name: "Barcelona, España",
      image: image1,
      stock: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      precio: 3200,
    },
    {
      id: "V-03",
      name: "Kioto, Japon",
      image: image2,
      stock: 9,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      precio: 4100,
    },
    {
      id: "V-04",
      name: "Chiang Mai, Tailandia",
      image: image3,
      stock: 5,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      precio: 5000,
    },
  ]);
  const [productos, setProductos] = useState([])

  function getCartItems() {
    let miPromesa = new Promise((resolve, reject) => {  
    setTimeout(function(){
      //"mock" de errores, lo dejamos afuera por ahora
      //const error = Math.random() > 0.85;
      const error = false;
      if(!error){      
        resolve(viajes);  
      }
      //si llegamos a esta intancia, significa que tuvimos un error,por eso "rechazamos" (reject) la promesa.
      reject("Error obteniendo los datos :(");
      }, 
      2000);
    });  
  
    //una vez resuelta la promesa... 
    miPromesa.then( function(valor){
      //actualizamos el state
      setProductos(viajes);
    }).catch(
      function(error){
        console.log(error);
    }).finally(
        function(){
          // se ejecuta siempre que termina la Promesa, 
          //tanto si es "resolve" o "rejected"
          //alert('Promesa terminada')
      }
    )
  }

  return (
    <div>
      {viajes.map((viaje) => (
        <Viaje
          key={viaje.id}
          viaje={viaje}
          viajes={viajes}
        />
      ))}
      <button className="btn btn-primary" onClick={getCartItems}>      
        Fetch Productos
      </button>
      <div class="container">
        {productos.map( (props)=> (
            //en cada iteración del array, renedrizamos un componente, pasandole además las props que necesitemos
            <>
            <Item
            name={props.name}
            description={props.description}
            image={props.image}
            stock={props.stock}
            precio={props.precio}
            >
            </Item>
            <hr/>
            </>
            
        ))}
       </div>
    </div>
  );
}

export default ItemList;
