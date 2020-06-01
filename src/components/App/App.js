import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css'

import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={ HomePage }/>
      <Route path="/cart" component={ CartPage }/>
    </Switch>
  );
};

export default App;
