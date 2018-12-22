import { createMuiTheme } from "@material-ui/core/styles";
import generateRgbScale from "utils/generateRgbScale";
import pxToRem from "utils/pxToRem";

export const palette = {
  general: {
    white: "#ffffff"
  },
  feedbacks: { success: "#57b45b", error: "#d50000" },
  primary: {
    light: "#21c7e0",
    main: "#00b5d0",
    dark: "#0096ac",
    contrastText: "#fff"
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000"
  },
  error: { main: "#de1e1e" }
};

const overrides = {
  MuiAvatar: {
    root: {
      border: "solid 1px white"
    }
  }
};

const defaultTypography = {
  fontSize: pxToRem(12),
  fontWeight: "normal",
  lineHeight: 1.67,
  fontStyle: "normal",
  fontStretch: "normal",
  letterSpacing: "normal",
  color: palette.general.white
};

export default createMuiTheme({
  overrides,
  typography: {
    ...defaultTypography,
    display1: {
      ...defaultTypography,
      fontSize: pxToRem(12),
      fontWeight: "bold"
    },
    display2: {
      ...defaultTypography,
      fontSize: pxToRem(10),
      fontWeight: "normal"
    },
    display3: {
      ...defaultTypography,
      fontSize: pxToRem(7),
      fontWeight: "normal"
    }
  },
  palette
});
