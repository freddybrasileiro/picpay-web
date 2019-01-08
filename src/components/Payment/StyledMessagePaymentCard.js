import React from "react";
import { Typography } from "@material-ui/core";

import StyledMessage from "components/Payment/StyledMessage";
import CreditCard from "components/icons/CreditCard";
import CreditCardGreen from "components/icons/CreditCardGreen";

export default ({ cardNumber, width }) => (
  <StyledMessage>
    {width === "xs" ? (
      <CreditCardGreen width="10" height="10" />
    ) : (
      <CreditCard width="10" height="10" />
    )}
    <div>
      <Typography
        variant="headline"
        component="p"
        style={{ color: width === "xs" ? "white" : "#474971" }}
      >
        Forma de pagamento:
      </Typography>
      <Typography
        variant="headline"
        component="p"
        style={{
          color: width === "xs" ? "white" : "#474971",
          fontWeight: "bold"
        }}
      >
        {`Cartão de Crédito com final ${cardNumber}`}
      </Typography>
    </div>
  </StyledMessage>
);
