import React from "react";
import PropTypes from "prop-types";
import { withStyles, withWidth } from "@material-ui/core";

import NumberFormat from "react-number-format";
import TextFieldMaterialUi from "@material-ui/core/TextField";

const styles = theme => ({
  textField: {
    width: "128px",
    fontSize: "24px",
    marginTop: "0px",
    marginLeft: "0px",
    marginRight: "0px"
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
  },
  inputText: {
    color: "#acb1bd"
  }
});

const NumberFormatCustom = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
    />
  );
};

const handleChange = onHandleChange => event => {
  onHandleChange(event.target.value);
};

const TextField = ({
  classes,
  id,
  fieldName,
  select,
  label,
  value,
  onChange,
  width
}) => (
  <TextFieldMaterialUi
    id={id}
    select={select}
    label={label}
    className={classes.textField}
    value={value}
    onChange={handleChange(onChange, fieldName)}
    fullWidth
    margin="normal"
    placeholder="R$ 0,00"
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
      },
      inputComponent: NumberFormatCustom
    }}
  />
);

const propTypes = {
  id: PropTypes.string,
  fieldName: PropTypes.string,
  select: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
};

const defaultProps = {
  id: "",
  fieldName: "",
  select: false,
  label: "",
  items: [],
  onChange: () => {}
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default withStyles(styles)(withWidth()(TextField));
