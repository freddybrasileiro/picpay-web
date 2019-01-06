import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Padding } from "styled-components-spacing";

import Root from "components/Payment/Root";
import StyledMessageNoCards from "components/Payment/StyledMessageNoCards";
import StyledMessagePaymentCard from "components/Payment/StyledMessagePaymentCard";
import PaymentUser from "components/PaymentUser/";
import Divider from "components/Utils/Divider";

const styles = () => ({
  button: {
    width: "85%",
    height: "24px",
    minHeight: "24px",
    padding: 0,
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)"
  },
  buttonMobile: {
    width: "100%",
    height: "24px",
    minHeight: "24px",
    padding: 0,
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)"
  }
});

const Payment = ({
  data,
  cards,
  selectedCard,
  width,
  classes,
  goToRegisterCard
}) => (
  <Root width={width}>
    <Padding bottom={2} />
    <PaymentUser data={data} />
    <Padding bottom={2} />
    <div>VALOR AQUI</div>
    <Padding bottom={3} />
    <Divider />
    <Padding bottom={1} />
    {!!cards.length ? (
      <StyledMessagePaymentCard cardNumber={selectedCard} />
    ) : (
      <StyledMessageNoCards goToRegisterCard={goToRegisterCard} />
    )}
    <Padding bottom={2} />
    <Button
      variant="contained"
      color="primary"
      className={width === "xs" ? classes.buttonMobile : classes.button}
    >
      Pagar
    </Button>
    <Padding bottom={2} />
  </Root>
);

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
    username: PropTypes.string
  }),
  cards: PropTypes.array,
  selectedCard: PropTypes.string,
  width: PropTypes.string
};

const defaultProps = {
  data: {},
  cards: [],
  selectedCard: "XXXX",
  width: "xs"
};

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(Payment));
