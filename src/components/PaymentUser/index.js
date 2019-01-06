import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography, withStyles, withWidth } from "@material-ui/core";

import Root from "components/PaymentUser/Root";
import StyledUserData from "components/PaymentUser/StyledUserData";
import StyledUserDataDetails from "components/PaymentUser/StyledUserDataDetails";

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

const PaymentUser = ({ data, width, classes }) => (
  <Root width={width}>
    <Avatar alt={data.name} src={data.img} className={classes.big} />
    <StyledUserData>
      <Typography
        component="p"
        variant={width === "xs" ? "display1" : "display4"}
      >
        {data.name}
      </Typography>
      <StyledUserDataDetails>
        {!!data.id && (
          <Typography
            component="p"
            variant={width === "xs" ? "display3" : "headline"}
          >
            id: {data.id}
          </Typography>
        )}
        <Typography
          component="p"
          variant={width === "xs" ? "display3" : "headline"}
        >
          {data.username}
        </Typography>
      </StyledUserDataDetails>
    </StyledUserData>
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

PaymentUser.propTypes = propTypes;
PaymentUser.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(PaymentUser));
