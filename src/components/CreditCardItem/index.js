import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Padding } from "styled-components-spacing";

import Root from "./Root";
import Content from "./Content";
import CreditCard from "components/icons/CreditCard";
import Check from "components/icons/Check";
import CreditCardGreen from "components/icons/CreditCardGreen";

const commonStyle = {
  height: "24px",
  minHeight: "24px",
  padding: 0,
  borderRadius: "12px",
  fontSize: "7px",
  fontWeight: "bold",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)",
  color: "#474971",
  width: "90px"
};

const Receipt = ({ width, card, isSelected }) => (
  <Root theme={{ isSelected }}>
    <Content>
      {width === "xs" ? (
        <CreditCardGreen width="14" height="14" />
      ) : (
        <CreditCard width="14" height="14" />
      )}
      <Typography variant="display2" component="p">
        {card.card_number}
      </Typography>
      {isSelected && <Check width="12" height="12" />}
    </Content>
  </Root>
);

const propTypes = {
  card: PropTypes.object,
  isSelected: PropTypes.bool
};

const defaultProps = {
  card: {},
  isSelected: false
};

Receipt.propTypes = propTypes;
Receipt.defaultProps = defaultProps;

export default withWidth()(Receipt);
