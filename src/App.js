import React, { Component } from "react";
import { Router, Switch, Link, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Launchpad from "./launchpad";
import Whitepaper from "./whitepaper";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

export default class App extends Component {
  
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launchpad" component={Launchpad} />
          <Route exact path="/whitepaper" render={(routerProps) => <Whitepaper {...routerProps} />} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    );
  }
}
