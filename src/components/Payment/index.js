import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Padding } from "styled-components-spacing";

import Root from "components/Payment/Root";
import StyledMessageNoCards from "components/Payment/StyledMessageNoCards";
import StyledMessagePaymentCard from "components/Payment/StyledMessagePaymentCard";
import PaymentUser from "components/PaymentUser/";
import TextFieldPayment from "components/TextFieldPayment";
import Divider from "components/Utils/Divider";

const styles = () => ({
  button: {
    width: "85%",
    height: "24px",
    minHeight: "24px",
    padding: 0,
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)",
    color: "#474971",
    fontSize: "7px",
    fontWeight: "bold"
  },
  buttonMobile: {
    width: "100%",
    height: "24px",
    minHeight: "24px",
    padding: 0,
    borderRadius: "12px",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)",
    color: "#474971",
    fontSize: "7px",
    fontWeight: "bold"
  }
});
//onChange={onRegisterCardFormChange}
const Payment = ({
  data,
  selectedCreditCard,
  width,
  classes,
  goToRegisterCard,
  creditCards,
  onPaymentValueChange,
  paymentValue,
  doTransaction
}) => (
  <Root width={width}>
    <Padding bottom={2} />
    <PaymentUser data={data} />
    <Padding bottom={2} />
    <TextFieldPayment
      id="standard-select-currency"
      fieldName="brand"
      onChange={onPaymentValueChange}
      value={paymentValue}
    />
    <Padding bottom={3} />
    <Divider />
    <Padding bottom={1} />
    {!!creditCards.length ? (
      <StyledMessagePaymentCard cardNumber={selectedCreditCard} width={width} />
    ) : (
      <StyledMessageNoCards goToRegisterCard={goToRegisterCard} />
    )}
    <Padding bottom={2} />
    <Button
      variant="contained"
      color="primary"
      className={width === "xs" ? classes.buttonMobile : classes.button}
      onClick={doTransaction}
    >
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
  creditCards: PropTypes.array,
  width: PropTypes.string,
  selectedCreditCard: PropTypes.string,
  onPaymentValueChange: PropTypes.func,
  doTransaction: PropTypes.func
};

const defaultProps = {
  data: {},
  creditCards: [],
  width: "xs",
  selectedCreditCard: "XXXX",
  onPaymentValueChange: () => {},
  doTransaction: () => {}
};

Payment.propTypes = propTypes;
Payment.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(Payment));
