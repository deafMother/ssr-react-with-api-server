import React from "react";
import { Link } from "react-router-dom";
import authHoc from "./hoc/authHoc";
import { logout } from "../actions";
import { connect } from "react-redux";

const Home = ({ logout }) => {
  const handleClick = (event) => {
    console.log("counting");
  };
  return (
    <div>
      <div>This is the home comp, now watching</div>
      <div>
        <Link to="/about">about page</Link>
      </div>

      <div>
        <button onClick={handleClick}>Count</button>
      </div>

      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default {
  component: connect(null, { logout })(authHoc(Home)),
};
