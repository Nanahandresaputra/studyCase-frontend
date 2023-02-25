import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import wilayahReducer from "./addressLocation/reducer.js";

let rootReducer = combineReducers({
  wilayah: wilayahReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

export let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
