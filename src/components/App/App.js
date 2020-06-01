import React from "react";
import { Route, Switch } from 'react-router-dom';
import ShopHeader from "../ShopHeader/ShopHeader";
import './App.css'

import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path="/" exact component={ HomePage }/>
        <Route path="/cart" component={ CartPage }/>
      </Switch>
    </main>
  );
};

export default App;
