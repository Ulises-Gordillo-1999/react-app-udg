import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Products from "../pages/Productos";
import About from "../pages/About";
//import ItemDetail from '../components/ItemDetail'
import ItemDetailContainer from "../components/ItemDetailContainer";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/About" component={About} />
        {/*<Route path="/Item/:id" component={ItemDetailContainer}/> */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
