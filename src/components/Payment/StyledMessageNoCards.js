import React from "react";
import { Typography } from "@material-ui/core";

import StyledMessage from "components/Payment/StyledMessage";
import Alert from "components/icons/Alert";

import { palette } from "theme";

export default () => (
  <StyledMessage isRed>
    <Alert width="10" height="10" />
    <div>
      <Typography
        variant="headline"
        component="p"
        color={palette.general.mediumPink}
      >
        Nenhum cartão de crédito cadastrado.
      </Typography>
      <Typography variant="headline" component="p">
        Cadastrar agora.
      </Typography>
    </div>
  </StyledMessage>
);
