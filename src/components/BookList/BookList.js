import React, { Component } from "react";
import './BookList.css';

import BookListItem from "../BookListItem/BookListItem";

export default class BookList extends Component{

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
