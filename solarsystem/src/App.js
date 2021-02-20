import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Planets from "./views/Planets";
import OnePlanet from "./views/OnePlanet";
import Error404 from "./views/Error404";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/oneplanet" component={OnePlanet} />
          <Route path="/*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
