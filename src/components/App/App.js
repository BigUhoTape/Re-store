import React from "react";
import './App.css'

import { WithBookstoreService } from './../HOC';

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return (
    <div>App Component</div>
  );
};

export default WithBookstoreService()(App);
