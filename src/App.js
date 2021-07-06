import React, { useState, useEffect } from "react"
import "./App.css";
import FetchPokeApi from "./components/FetchPokeApi";
import AppRouter from "./routers/AppRouter";
//import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Context/CartContext";
//Firebase
import firebase from 'firebase/app'
import "@firebase/firestore"
import {getFireStore} from './Firebase/Firebase'


function App() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
   /*setLoading(true);
   const db = getFireStore();
   const itemCollection = db.collection("accesorios")
   itemCollection.get().then((querySnapshot) => {
     if (querySnapshot.size === 0) {
       console.log('no results')
     }
     setItems(querySnapshot.docs.map(doc=> doc.data()));
   }).catch((error)=>{
     console.log("error searching items", error);
   }).finally(()=> {
     setLoading(false);
   }) */
  }, [])

  return (
    <div>
      
      <CartProvider>
        <AppRouter />
      </CartProvider>
      {/*<FetchPokeApi /> */}
    </div>
  );
}

export default App;
