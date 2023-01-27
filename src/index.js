import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./App";
import { searchRobots, requestRobots } from "./reducers";
import * as registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer , applyMiddleware( thunkMiddleware,logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store}></App>
    </React.StrictMode>
  </Provider>
);

// ReactDOM.render(<Card />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
registerServiceWorker.register();