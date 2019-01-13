import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth } from "@material-ui/core";

import Root from "./Root";
import Content from "./Content";
import CreditCardNumberWrapper from "./CreditCardNumberWrapper";
import CreditCard from "components/icons/CreditCard";
import Check from "components/icons/Check";
import CreditCardGreen from "components/icons/CreditCardGreen";

const CreditCardItem = ({ width, card, isSelected, onClick }) => (
  <Root theme={{ isSelected, width }} onClick={onClick}>
    <Content>
      {width === "xs" ? (
        <CreditCardGreen width="14" height="14" />
      ) : (
        <CreditCard width="14" height="14" />
      )}
      <Typography
        variant="display2"
        component="div"
        style={{ display: "flex" }}
      >
        <CreditCardNumberWrapper>
          {card.card_number.substring(0, 4)}
        </CreditCardNumberWrapper>
        <CreditCardNumberWrapper>
          {card.card_number.substring(4, 8)}
        </CreditCardNumberWrapper>
        <CreditCardNumberWrapper>
          {card.card_number.substring(8, 12)}
        </CreditCardNumberWrapper>
        <CreditCardNumberWrapper>
          {card.card_number.substring(12, 16)}
        </CreditCardNumberWrapper>
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

CreditCardItem.propTypes = propTypes;
CreditCardItem.defaultProps = defaultProps;

export default withWidth()(CreditCardItem);
