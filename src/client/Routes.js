import App from "./App";
import HomePage from "./components/Home";
import UsersListPage from "./components/UserList";
import UnknownRoute from "./components/404Page";
import Login from "./components/LoginPage";

// a we are using server side data loading
// so we must use an array of paths and not the traditional react router approach
// each object represents one route
export default [
  {
    ...App, // the app will always  be displayed to the screen as we have not tied any path to it
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        path: "/users",
        ...UsersListPage,
        exact: true,
      },
      {
        path: "/login",
        ...Login,
        exact: true,
      },
      {
        ...UnknownRoute,
      },
    ],
  },
];
