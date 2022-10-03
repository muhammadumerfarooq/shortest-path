import { shortestPathReducer } from "./reducers/reducer";
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(shortestPathReducer, composeWithDevTools());
// const store = createStore(shortestPathReducer);

export default store;