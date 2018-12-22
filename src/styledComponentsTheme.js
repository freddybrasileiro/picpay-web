import theme from "theme";
import pxToRem from "utils/pxToRem";

export const breakpoints = { ...theme.breakpoints.values };
export const spacing = {
  0: "0",
  1: pxToRem(8),
  2: pxToRem(16),
  3: pxToRem(24),
  4: pxToRem(32),
  5: pxToRem(40),
  6: pxToRem(48),
  7: pxToRem(56),
  8: pxToRem(64),
  9: pxToRem(72),
  10: pxToRem(80)
};

export default {
  breakpoints,
  spacing
};
