import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Root from "components/Payment/Root";
import StyledMessageNoCards from "components/Payment/StyledMessageNoCards";
import PaymentUser from "components/PaymentUser/";

const styles = theme => ({
  button: {
    width: "85%",
    height: "24px",
    minHeight: "24px",
    padding: 0,
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)"
  }
});

const Payment = ({ data, width, classes }) => (
  <Root width={width}>
    <PaymentUser data={data} />
    <StyledMessageNoCards />
    <Button variant="contained" color="primary" className={classes.button}>
      Pagar
    </Button>
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

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(Payment));
