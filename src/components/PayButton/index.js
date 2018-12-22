import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth } from "@material-ui/core";
import { Padding } from "styled-components-spacing";

import Root from "components/PayButton/Root";

import DollarIcon from "components/icons/DollarIcon";
import RightArrow from "components/icons/RightArrow";

const PayButton = ({ width }) => (
  <Root width={width}>
    <DollarIcon width="16" height="16" />
    <Padding right={1} />
    {width !== "xs" && (
      <React.Fragment>
        <Typography component="p" variant="display2">
          Pagar
        </Typography>
        <Padding right={2} />
      </React.Fragment>
    )}
    <RightArrow width="16" height="16" />
  </Root>
);

const propTypes = {
  width: PropTypes.string
};

const defaultProps = {
  width: "xl"
};

PayButton.propTypes = propTypes;
PayButton.defaultProps = defaultProps;

export default withWidth()(PayButton);
