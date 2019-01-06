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
    color: "#acb1bd",
    "&$cssFocused": {
      color: "#474971"
    }
  },
  cssLabelMobile: {
    color: "#acb1bd",
    "&$cssFocused": {
      color: "#7de6c6"
    }
  },
  cssFocused: {
    color: "#474971 !important"
  },
  cssFocusedMobile: {
    color: "#7de6c6 !important"
  },
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#474971"
    }
  },
  cssUnderlineMobile: {
    "&:before": {
      borderBottomColor: "#acb1bd"
    },
    "&:after": {
      borderBottomColor: "#7de6c6"
    }
  }
});

const TextField = ({
  classes,
  id,
  select,
  label,
  value,
  items,
  onChange,
  width
}) => (
  <TextFieldMaterialUi
    id={id}
    select={select}
    label={label}
    className={classes.textField}
    value={value}
    onChange={onChange}
    fullWidth
    SelectProps={{
      MenuProps: {
        className: classes.menu
      }
    }}
    margin="normal"
    InputLabelProps={{
      FormLabelClasses: {
        root: width === "xs" ? classes.cssLabelMobile : classes.cssLabel,
        focused: width === "xs" ? classes.cssFocusedMobile : classes.cssFocused
      }
    }}
    InputProps={{
      style: { color: "#acb1bd" },
      classes: {
        underline:
          width === "xs" ? classes.cssUnderlineMobile : classes.cssUnderline,
        focused: width === "xs" ? classes.cssFocusedMobile : classes.cssFocused
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

const propTypes = {
  id: PropTypes.string,
  select: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func
};

const defaultProps = {
  id: "",
  select: false,
  label: "",
  value: "",
  items: [],
  onChange: () => {}
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(TextField));
