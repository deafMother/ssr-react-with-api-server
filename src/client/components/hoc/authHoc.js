// an hoc is a function that takes a component and returns componet after if it chooses to modify it
// this hoc will check the auth status and redirect to the login page if not ogged in

import React from "react";
import { connect } from "react-redux";

export default (MyComponent, element) => {
  console.log("element: ", element); // this element is passed by the MyComponent to the hoc
  const hoc = (props) => {
    // console.log("props:", props); // this is the props passed to MyComponent by index js, the  hoc needs to send it further to MyComponent other wise it will not be available in MyComponent
    switch (props.auth) {
      case true:
        return <MyComponent {...props} />;
      case null:
        return <h3>loading...</h3>;

      default:
        return <Redirect to="/login" />;
    }
  };

  const mapStateToProps = ({ auth }) => {
    return {
      auth,
    };
  };

  return connect(mapStateToProps)(hoc);
};
