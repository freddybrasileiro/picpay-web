import React from "react";
import NumberFormat from "react-number-format";

const NumberFormatCustom = props => {
  const { inputRef, onChange, mask, ...other } = props;

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
      decimalScale={0}
      allowNegative={false}
      format={mask && mask.format}
    />
  );
};

export default NumberFormatCustom;
