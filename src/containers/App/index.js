import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getUsers as doGetUsers } from "modules/Users/actions";

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <div>teste</div>;
  }
}

const propTypes = {};

const defaultProps = {};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(doGetUsers()),
  dispatch
});

const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
