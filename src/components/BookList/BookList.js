import React, { Component } from "react";
import { connect } from 'react-redux';
import WithBookstoreService from "../HOC/WithBookstoreService";
import { bookLoaded } from './../../actions/index';
import './BookList.css';

import BookListItem from "../BookListItem/BookListItem";

class BookList extends Component{

  componentDidMount() {
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();

    this.props.bookLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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

const mapStateToProps = ({ books }) => {
  return { books }
};

const mapDispatchToProps = {
  bookLoaded
};

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
