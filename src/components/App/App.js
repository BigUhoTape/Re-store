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
        <Route path="/Re-store/" component={ HomePage }/>
        <Route path="/Re-store/cart" component={ CartPage }/>
      </Switch>
    </main>
  );
};

export default App;
