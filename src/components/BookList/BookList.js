import React, { Component } from "react";
import { connect } from 'react-redux';
import WithBookstoreService from "../HOC/WithBookstoreService";
import { fetchBooks, bookAddedToCart } from './../../actions/index';
import './BookList.css';

import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component{

  componentDidMount() {
    this.props.fetchBooks();
  };


  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ( {bookList: { books, loading, error }}) => {
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
    fetchBooks: fetchBooks(bookStoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  }
};


export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
