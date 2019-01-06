import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import TextField from "components/TextField";
import Root from "./Root";

const styles = theme => ({
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
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const brands = [
  {
    value: "Visa",
    label: "Visa"
  },
  {
    value: "Elo",
    label: "Elo"
  },
  {
    value: "Master",
    label: "Master"
  }
];

const RegisterCard = ({ classes, width }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Root>
        <TextField
          id="standard-select-currency"
          label="Selecione a bandeira"
          value="Visa"
          select
          items={brands}
        />
        <TextField
          id="standard-name"
          label="Nome escrito no cartão"
          value={""}
        />
        <TextField id="standard-name" label="Número do Cartão" value={""} />
        <TextField id="standard-name" label="Validade (mm/aaaa)" value={""} />
        <TextField id="standard-name" label="Código de segurança" value={""} />
        <TextField
          id="standard-name"
          label="CEP do endereço da fatura"
          value={""}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={width === "xs" ? classes.buttonMobile : classes.button}
        >
          Cadastrar
        </Button>
      </Root>
    </form>
  );
};

const propTypes = {};

const defaultProps = {};

RegisterCard.propTypes = propTypes;
RegisterCard.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(RegisterCard));
