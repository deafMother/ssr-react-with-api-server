import React from "react";
import { renderRoutes } from "react-router-config";
import { checkLoginStatus } from "./actions";

import Header from "./components/Header";

// route routes are the components matched by the routes component depending on the path
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

// function for data loading in server side
// will not be used in the client nundle js
function loadData(store) {
  console.log("loading data");
  return store.dispatch(checkLoginStatus());
}

export default {
  component: App,
  loadData,
};
