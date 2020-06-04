const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    { id: 1, name: 'abv', count: 1, total: 220 }
  ],
  orderTotal: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS': {
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    }
    case 'FETCH_BOOKS_REQUEST': {
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    }
    case 'FETCH_BOOKS_FAILURE': {
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
