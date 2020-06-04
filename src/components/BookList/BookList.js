import React, { Component } from "react";
import { connect } from 'react-redux';
import WithBookstoreService from "../HOC/WithBookstoreService";
import { bookLoaded, booksRequested } from './../../actions/index';
import './BookList.css';

import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";

class BookList extends Component{

  componentDidMount() {
    const { bookStoreService, booksRequested } = this.props;
    booksRequested();
    bookStoreService.getBooks()
      .then(data => {
        this.props.bookLoaded(data);
      })
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner/>
    }

    return (
      <ul className="book-list">
        {
          books.map(book => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading }
};

const mapDispatchToProps = {
  bookLoaded,
  booksRequested
};

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
