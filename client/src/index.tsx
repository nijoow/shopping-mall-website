import React from "react";
import ReactDOM from "react-dom";
import App from "./components/views/App";
import "./global.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import ReduxThunk from "redux-thunk";
import rootReducer from "./_reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware, ReduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
