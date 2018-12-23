import React from "react";
import PropTypes from "prop-types";

import Root from "components/UsersList/Root";

import UserListItem from "components/UserListItem/";

const UsersList = ({ data }) => (
  <Root>
    {data.map(user => (
      <UserListItem key={user.id} data={user} />
    ))}
  </Root>
);

const propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool
};

const defaultProps = {
  data: []
};

UsersList.propTypes = propTypes;
UsersList.defaultProps = defaultProps;

export default UsersList;
