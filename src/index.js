import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={App} path="/app" />
      <Route component={SignUp} path="/signup" />
    </Switch>
  </BrowserRouter>
  , document.getElementById("root"));
