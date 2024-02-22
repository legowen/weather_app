import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// React-Redux
import { Provider } from "react-redux";
// Redux
import { createStore } from "redux";
import { applyMiddleware } from "redux";
// Reducer
import reducer from "./redux/combinedReducer";
// Redux-Thunk
import { thunk } from "redux-thunk";
// Style
import "./assets/scss/style.scss";

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);