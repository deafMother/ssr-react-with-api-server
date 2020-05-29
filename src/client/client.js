//  the rentry point of the client  code base
// intended to run only on the client side

// treat this file as a normal react normal index setup
// we can do the normal set in this app like we do in normal react apps
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "./Routes";
import reducers from "./reducers";

// once the client bundle is loaded into the browser all requests will be sent to this base url
// and the renderer server will proxy to the api server
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const axiosInstance = axios.create({
  baseURL: "/api",
});

// note: at this point the sever has already sent the
// html template to the client so we can render this react
// component to that "root" element

const store = createStore(
  reducers,
  window.INITIAL_STATE, // this initial state is set up by the server and is available on the global window object  ,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
// hydrate is like render

// note: the BrowserRouter will not work on the server side
// there we need to use StaticRouter
//sd
