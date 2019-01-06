import React from "react";
import { Typography, withStyles } from "@material-ui/core";

import StyledMessage from "components/Payment/StyledMessage";
import Alert from "components/icons/Alert";

const styles = {
  registerNow: {
    fontWeight: "bold",
    cursor: "pointer",
    color: "#ef5778"
  },
  text: {
    color: "#ef5778"
  }
};

const StyledMessageNoCards = ({ classes, goToRegisterCard }) => (
  <StyledMessage>
    <Alert width="10" height="10" />
    <div>
      <Typography className={classes.text} variant="headline" component="p">
        Nenhum cartão de crédito cadastrado.
      </Typography>
      <Typography
        className={classes.registerNow}
        variant="headline"
        component="p"
        onClick={goToRegisterCard}
      >
        Cadastrar agora.
      </Typography>
    </div>
  </StyledMessage>
);

export default withStyles(styles)(StyledMessageNoCards);
