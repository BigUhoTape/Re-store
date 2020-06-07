import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

const myAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAY_ACTION'
  }), 2000)
};

store.dispatch(myAction);

export default store;
