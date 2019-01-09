import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Padding } from "styled-components-spacing";

import NewCardWrapper from "./NewCardWrapper";
import Root from "./Root";
import CreditCardItem from "components/CreditCardItem";
import Divider from "components/Utils/Divider";
import Add from "components/icons/Add";
import AddGreen from "components/icons/AddGreen";

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

const styles = () => ({
  button: {
    ...commonStyle,
    width: "85%"
  },
  buttonMobile: {
    ...commonStyle,
    width: "100%"
  }
});

const CreditCardList = ({ width, cards, selectedCard, classes }) => (
  <Root>
    <Padding top={1} />
    <Typography variant="display2" component="p">
      Cartões Cadastrados
    </Typography>
    <Padding top={2} />
    {cards.map((card, index) => (
      <CreditCardItem card={card} isSelected={index === selectedCard} />
    ))}
    <Divider />
    <NewCardWrapper>
      {width === "xs" ? (
        <AddGreen width="14" height="14" />
      ) : (
        <Add width="14" height="14" />
      )}
      <Typography variant="display2" component="p">
        Cadastrar novo cartão
      </Typography>
    </NewCardWrapper>
    <Padding top={2} />
    <Button
      variant="contained"
      color="primary"
      className={width === "xs" ? classes.buttonMobile : classes.button}
    >
      selecionar
    </Button>
  </Root>
);

const propTypes = {
  cards: PropTypes.array
};

const defaultProps = {
  cards: []
};

CreditCardList.propTypes = propTypes;
CreditCardList.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(CreditCardList));
