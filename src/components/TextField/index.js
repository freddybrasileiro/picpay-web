import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";
import TextFieldMaterialUi from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    width: "100%",
    fontSize: "8px",
    marginTop: "0px",
    marginLeft: "0px",
    marginRight: "0px"
  },
  menu: {
    fontSize: "8px"
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#474971"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#474971"
    }
  }
});

const TextField = ({
  classes,
  id,
  select = false,
  label,
  value,
  items = [],
  onChange
}) => (
  <TextFieldMaterialUi
    id={id}
    select={select}
    label={label}
    className={classes.textField}
    value={value}
    onChange={onChange}
    SelectProps={{
      MenuProps: {
        className: classes.menu
      }
    }}
    margin="normal"
    InputLabelProps={{
      FormLabelClasses: {
        root: classes.cssLabel,
        focused: classes.cssFocused
      }
    }}
    InputProps={{
      classes: {
        underline: classes.cssUnderline,
        focused: classes.cssFocused
      }
    }}
  >
    {items.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextFieldMaterialUi>
);

const propTypes = {};

const defaultProps = {};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default withStyles(styles)(TextField);
