import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withStyles, withWidth } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Root from "./Root";

/*import { closeDialog as doCloseDialog } from "modules/Payment/actions";
import { DIALOG_SCREENS } from "modules/Payment/constants";
import {
  selectIsDialogOpen,
  selectDialogScreen
} from "modules/Payment/selectors";
*/
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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    fontSize: "8px",
    marginTop: "0px",
    marginLeft: "0px",
    marginRight: "0px"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    fontSize: "8px"
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
//onChange={this.handleChange('currency')}
//onChange={this.handleChange('name')}
const RegisterCard = ({ classes, width }) => {
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Root>
        <TextField
          id="standard-select-currency"
          select
          label="Selecione a bandeira"
          className={classes.textField}
          value="Visa"
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {brands.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-name"
          label="Nome escrito no cartão"
          className={classes.textField}
          value={""}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Número do Cartão"
          className={classes.textField}
          value={""}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Validade (mm/aaaa)"
          className={classes.textField}
          value={""}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Código de segurança"
          className={classes.textField}
          value={""}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="CEP do endereço da fatura"
          className={classes.textField}
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

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mapStateToProps = createStructuredSelector({});

export default withStyles(styles)(
  withWidth()(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(RegisterCard)
  )
);
