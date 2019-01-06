import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography, withStyles, withWidth } from "@material-ui/core";

import Root from "components/UserListItem/Root";
import StyledUserData from "components/UserListItem/StyledUserData";
import StyledUserDataDetails from "components/UserListItem/StyledUserDataDetails";

import GoToPayment from "components/GoToPayment";

const styles = {
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

const UserListItem = ({ data, width, classes, setPaymentUser }) => (
  <Root width={width} onClick={() => setPaymentUser(data.id)}>
    <Avatar alt={data.name} src={data.img} className={classes.big} />
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
    <GoToPayment width={width} />
  </Root>
);

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string
  }),
  width: PropTypes.string,
  setPaymentUser: PropTypes.func
};

const defaultProps = {
  data: {},
  width: "xs",
  setPaymentUser: () => {}
};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(UserListItem));
