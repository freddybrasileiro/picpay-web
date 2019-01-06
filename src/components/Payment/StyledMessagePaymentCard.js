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
      <Typography variant="headline" component="p">
        Forma de pagamento:
      </Typography>
      <Typography variant="headline" component="p">
        {`Cartão de Crédito com final ${cardNumber}`}
      </Typography>
    </div>
  </StyledMessage>
);
