import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class NoteList extends Component {
  render() {
    return <div>Here's a list of notes</div>;
  }
}

export default {
  component: UsersList,
};
