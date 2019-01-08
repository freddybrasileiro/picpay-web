import React from "react";
import PropTypes from "prop-types";
import { Typography, withWidth, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Padding } from "styled-components-spacing";

import Root from "./Root";
import StyledButton from "./StyledButton";
import PaymentUser from "components/PaymentUser";
import TableLine from "components/TableLine";

const commonStyle = {
  height: "24px",
  minHeight: "24px",
  padding: 0,
  borderRadius: "12px",
  fontSize: "7px",
  fontWeight: "bold"
};

const commonStyleCta = {
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  backgroundImage: "linear-gradient(to bottom, #7de6c6, #7de6c6)",
  color: "#474971",
  width: "90px"
};
const styles = () => ({
  button: {
    ...commonStyle,
    ...commonStyleCta
  },
  buttonMobile: {
    ...commonStyle,
    ...commonStyleCta
  },
  backButton: {
    ...commonStyle,
    width: "90px",
    backgroundColor: "white",
    color: "#474971",
    border: "solid 1px #474971",
    "&:hover": {
      backgroundColor: "white"
    }
  },
  backButtonMobile: {
    ...commonStyle,
    width: "50px",
    backgroundColor: "transparent",
    color: "white",
    border: "solid 1px white",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
});

const Receipt = ({ width, user, data, cardNumber, classes }) => {
  return (
    <Root theme={{ width }}>
      <PaymentUser data={user} />
      <Padding vertical={2} />
      <Typography component="p" variant="display2">
        Pagamento Confirmado
      </Typography>
      <Padding vertical={1} />
      <TableLine data={{ label: "Transação", value: data.id }} />
      <TableLine data={{ label: "Data", value: data.timestamp }} />
      <TableLine data={{ label: "Cartão", value: cardNumber }} />
      <TableLine data={{ label: "Valor", value: data.value }} />
      <Padding vertical={3} />
      <StyledButton>
        <Button
          variant="contained"
          color="primary"
          className={
            width === "xs" ? classes.backButtonMobile : classes.backButton
          }
        >
          voltar
        </Button>
        <Padding right={2} />
        <Button
          variant="contained"
          color="primary"
          className={width === "xs" ? classes.buttonMobile : classes.button}
        >
          pagar novamente
        </Button>
      </StyledButton>
    </Root>
  );
};

const propTypes = {
  data: PropTypes.object,
  cardNumber: PropTypes.string
};

const defaultProps = {
  data: {}
};

Receipt.propTypes = propTypes;
Receipt.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(Receipt));
