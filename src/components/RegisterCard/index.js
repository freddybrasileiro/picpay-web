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

const RegisterCard = ({
  classes,
  width,
  registerCard,
  onRegisterCardFormChange,
  registerCardFormData
}) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Root>
        <TextField
          id="standard-select-currency"
          label="Selecione a bandeira"
          value={registerCardFormData["brand"]}
          select
          items={brands}
          onChange={onRegisterCardFormChange}
          fieldName="brand"
        />
        <TextField
          id="standard-name"
          label="Nome escrito no cartão"
          value={registerCardFormData["name"]}
          onChange={onRegisterCardFormChange}
          fieldName="name"
        />
        <TextField
          id="standard-name"
          label="Número do Cartão"
          value={registerCardFormData["card_number"]}
          onChange={onRegisterCardFormChange}
          fieldName="card_number"
        />
        <TextField
          id="standard-name"
          label="Validade (mm/aaaa)"
          value={registerCardFormData["expiry_date"]}
          onChange={onRegisterCardFormChange}
          fieldName="expiry_date"
        />
        <TextField
          id="standard-name"
          label="Código de segurança"
          value={registerCardFormData["cvv"]}
          onChange={onRegisterCardFormChange}
          fieldName="cvv"
        />
        <TextField
          id="standard-name"
          label="CEP do endereço da fatura"
          value={registerCardFormData["zip"]}
          margin="normal"
          onChange={onRegisterCardFormChange}
          fieldName="zip"
        />
        <Button
          variant="contained"
          color="primary"
          className={width === "xs" ? classes.buttonMobile : classes.button}
          onClick={registerCard}
        >
          Cadastrar
        </Button>
      </Root>
    </form>
  );
};

const propTypes = {
  onRegisterCardFormChange: PropTypes.func,
  selectValue: PropTypes.func,
  registerCardFormData: PropTypes.object
};

const defaultProps = {
  onRegisterCardFormChange: () => {},
  selectValue: () => {},
  registerCardFormData: { card_number: "1111111111111111" }
};

RegisterCard.propTypes = propTypes;
RegisterCard.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(RegisterCard));
