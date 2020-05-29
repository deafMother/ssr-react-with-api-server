import React, { useEffect } from "react";
import { checkLoginStatus } from "../actions";
import { connect } from "react-redux";

// check login status when the component is first rendered
const Header = ({ auth, checkLoginStatus }) => {
  useEffect(() => {
    console.log("mounted header");
    checkLoginStatus();
  }, []);

  return <h1>This is the header</h1>;
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps, { checkLoginStatus })(Header);
