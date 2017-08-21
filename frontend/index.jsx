import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from './reducers';
import promise from 'redux-promise';
import App from "./components/app.jsx";
// import TopHundred from "./components/top_hundred.jsx";

// ensures that all actions flow through the promise middleware before reaching the reducers
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

document.addEventListener("DOMContentLoaded", () => {  
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector("#main")
  );
});