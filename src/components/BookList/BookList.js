import React, { Component } from "react";
import { connect } from 'react-redux';
import WithBookstoreService from "../HOC/WithBookstoreService";
import { bookLoaded, booksRequested, booksError } from './../../actions/index';
import './BookList.css';

import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class BookList extends Component{

  componentDidMount() {
    this.props.fetchBooks();
  };


  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
};

// const mapDispatchToProps = {
//   bookLoaded,
//   booksRequested,
//   booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookStoreService.getBooks()
        .then(data => {
          dispatch(bookLoaded(data));
        })
        .catch(error => dispatch(booksError(error)))
    }
  }
};


export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
