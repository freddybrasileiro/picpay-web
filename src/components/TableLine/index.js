import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth } from "@material-ui/core";

import Root from "./Root";

const Receipt = ({ data, width }) => {
  return (
    <Root theme={{ width }}>
      <Typography component="p" variant="headline">
        {data.label}
      </Typography>
      <Typography component="p" variant="headline">
        {data.value}
      </Typography>
    </Root>
  );
};

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

Receipt.propTypes = propTypes;
Receipt.defaultProps = defaultProps;

export default withWidth()(Receipt);
