import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography, withWidth } from "@material-ui/core";

/*
import Error from "components/UserListItem/Error";
import Loader from "components/UserListItem/Loader";
import NoDataInPastMessage from "components/UserListItem/NoDataInPastMessage";
*/
import Root from "components/UserListItem/Root";
import StyledUserData from "components/UserListItem/StyledUserData";
import StyledUserDataDetails from "components/UserListItem/StyledUserDataDetails";

import PayButton from "components/PayButton";

const avatarStyle = {
  big: {
    width: 40,
    height: 40,
    border: "solid 1px white"
  },
  small: {
    width: 26,
    height: 26,
    border: "solid 1px white"
  }
};

const UserListItem = ({ data, width }) => (
  <Root width={width}>
    <Avatar alt={data.name} src={data.img} className={avatarStyle.big} />
    <StyledUserData>
      <Typography component="p" variant="display1">
        {data.name}
      </Typography>
      <StyledUserDataDetails>
        <Typography component="p" variant="display3">
          id: {data.id}
        </Typography>
        <Typography component="p" variant="display3">
          {data.username}
        </Typography>
      </StyledUserDataDetails>
    </StyledUserData>
    <PayButton width={width} />
  </Root>
);

const propTypes = {};

const defaultProps = {};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default withWidth()(UserListItem);
