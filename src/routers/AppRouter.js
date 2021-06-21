import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ItemListContainer from "../components/ItemListContainer";
import Home from "../pages/Home";
import Products from "../pages/Productos";
import About from "../pages/About";
import NavBar from "../components/NavBar";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
