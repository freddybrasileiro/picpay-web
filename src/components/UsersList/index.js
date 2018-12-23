import React from "react";
import PropTypes from "prop-types";

import Root from "components/UsersList/Root";
import Loader from "components/UsersList/Loader";
import Error from "components/UsersList/Error";
import Empty from "components/UsersList/Empty";

import UserListItem from "components/UserListItem/";

const UsersList = ({ data, isLoading, hasError }) => {
  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (hasError) {
    content = <Error />;
  } else if (!data.length) {
    content = <Empty />;
  } else {
    content = data.map(user => <UserListItem key={user.id} data={user} />);
  }

  return <Root>{content}</Root>;
};

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
