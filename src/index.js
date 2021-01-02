import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import store from "./store";

let token = Cookies.getJSON("acc");

const url = "https://staging.bintex.id/api/is-auth";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: token.token,
  },
};

async function loggedIn() {
  let res = await fetch(url, options);
  let data = await res.status;
  return data;
}

React.icons = icons;
ReactDOM.render(
  <Provider store={store}>
    {loggedIn()
      .then(<App />)
      .catch((window.location.href = "https://bintex.id/login"))}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
