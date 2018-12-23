import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getUsers as doGetUsers } from "modules/Users/actions";
import {
  selectUsers,
  selectIsLoading,
  selectHasError
} from "modules/Users/selectors";

import UsersList from "components/UsersList";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, isLoading, hasError } = this.props;
    return <UsersList data={users} isLoading={isLoading} hasError={hasError} />;
  }
}

const propTypes = {
  users: PropTypes.array,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool
};

const defaultProps = {
  data: [],
  isLoading: false,
  hasError: false
};

UsersListContainer.propTypes = propTypes;
UsersListContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(doGetUsers()),
  dispatch
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading(),
  hasError: selectHasError(),
  users: selectUsers()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
