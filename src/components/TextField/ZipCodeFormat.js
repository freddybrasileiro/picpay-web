import React from "react";
import NumberFormatCustom from "./NumberFormatCustom";

const CcvFormat = props => (
  <NumberFormatCustom {...props} mask={{ format: "#####-###" }} />
);

export default CcvFormat;
