import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import BookStoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext/BookstoreServiceContext";

import store from "./store";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
