import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography, withWidth } from "@material-ui/core";

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
        {!!data.id && (
          <Typography component="p" variant="display3">
            id: {data.id}
          </Typography>
        )}
        <Typography component="p" variant="display3">
          {data.username}
        </Typography>
      </StyledUserDataDetails>
    </StyledUserData>
    <PayButton width={width} />
  </Root>
);

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string
  }),
  width: PropTypes.string
};

const defaultProps = {
  data: {},
  width: "xs"
};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default withWidth()(UserListItem);
