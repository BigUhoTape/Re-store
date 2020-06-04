
const bookLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
    payload: newBooks
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_SUCCESS'
  }
};

const booksError = error => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
};

const fetchBooks = (bookStoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookStoreService.getBooks()
    .then(data => {
      dispatch(bookLoaded(data));
    })
    .catch(error => dispatch(booksError(error)))
};

const bookAddedToCart = bookId => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
};

export {
  fetchBooks,
  bookAddedToCart
};
