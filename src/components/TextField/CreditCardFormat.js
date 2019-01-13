import React from "react";
import NumberFormatCustom from "./NumberFormatCustom";

const CreditCardFormat = props => (
  <NumberFormatCustom {...props} mask={{ format: "#### #### #### ####" }} />
);

export default CreditCardFormat;
