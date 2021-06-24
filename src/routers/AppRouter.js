import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Products from "../pages/Productos";
import About from "../pages/About";
//import ItemDetail from '../components/ItemDetail'
import ItemDetailContainer from "../components/ItemDetailContainer";
import Consoles from "../components/Consoles";
import Computing from "../components/Computing";
import Cameras_accessories from "../components/Cameras_accessories";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/About" component={About} />
        <Route exact path="/:Products_id" component={ItemDetailContainer} />
        <Route exact path="/:Categories/consoles" component={Consoles} />
        <Route exact path="/:Categories/computing" component={Computing} />
        <Route
          exact
          path="/:Categories/cameras_accessories"
          component={Cameras_accessories}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
