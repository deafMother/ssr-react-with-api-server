import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { name: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    if (this.props.auth) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default {
  component: connect(mapStateToProps, { login })(LoginForm),
};
