import { createMuiTheme } from "@material-ui/core/styles";
import generateRgbScale from "utils/generateRgbScale";
import pxToRem from "utils/pxToRem";

export const palette = {
  general: {
    white: "#ffffff",
    cta: "#f9386a",
    overspended: "#ed4a4a",
    black: generateRgbScale(0, 0, 0),
    magenta: "#f9386a",
    purple: "#250048",
    income: "#00bd6e",
    outcome: "#5b64de",
    purpleDark: "#3f1b68",
    purpleLight: "#604579",
    magentaVeryDark: "#cc2e57",
    magentaDark: "#e33361",
    magentaLight: "#f94a77",
    magentaVeryLight: "#fa6e92",
    blue: "#00c1eb",
    blueVeryDark: "#009ec1",
    blueDark: "#00b0d6",
    blueLight: "#2eccee",
    blueVeryLight: "#45d1f0",
    grey: "#e3e4e5",
    greyLight: "#edeef0",
    ignored: "#9d9d9d",
    error: "#de1e1e"
  },
  category: {
    all: "#7298a7",
    others: "#006663",
    home: "#5b64de",
    health: "#ed4a4a",
    education: "#00bd6e",
    homeBills: "#a649ce",
    restaurants: "#e3427a",
    gifts: "#f573ab",
    recreation: "#82b0f9",
    market: "#ea754b",
    shopping: "#00b3ae",
    transportation: "#e6a42a",
    employees: "#2d3991",
    tvInternetPhone: "#9040bf",
    personalCare: "#e061ce",
    trips: "#dd5a3c",
    family: "#007573",
    jobExpenses: "#7a37aa",
    taxes: "#a02d24",
    withdrawals: "#00934d",
    bankTaxes: "#ad8686",
    services: "#af712e",
    payment: "#00898d",
    bonus: "#00aa5d",
    income: "#00a09d",
    otherIncomes: "#006d2c",
    loan: "#d8d12b",
    paymentCard: "#961d1d", //Carnê
    overdraft: "#ce1538", //Cheque Especial
    credit: "#d23b54", //Crediario
    payrollLoan: "#f5556c", //Crédito Consignado
    loanInterest: "#e81407", //Juros do Cartão
    interest: "#d01c1c", //Juros
    otherLoans: "#e83f35", //Outros Empréstimos
    financialApplication: "#333333", //Aplicação
    creditCardPayment: "#4c4c4c", //Pagamento de Cartão
    redemption: "#666666", //Resgate
    transfer: "#7f7f7f", //Transferência
    new: "#812053", //Nova Categoria
    withoutCategory: "#f9386a" //Sem categoria
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
  MuiButton: {
    root: {
      borderRadius: 90,
      border: 0,
      color: palette.general.white,
      height: 40,
      padding: "0 30px"
    }
  },
  MuiToolbar: {
    root: {
      display: "flex",
      justifyContent: "center"
    }
  },
  MuiInputBase: {
    root: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24)
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
  color: palette.general.black[73]
};

export default createMuiTheme({
  overrides,
  typography: {
    ...defaultTypography,
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    display3: {
      ...defaultTypography,
      fontSize: pxToRem(18),
      fontWeight: "bold",
      lineHeight: 1.44
    },
    display2: {
      ...defaultTypography,
      fontSize: pxToRem(16),
      fontWeight: "bold",
      lineHeight: 1.5
    },
    display1: {
      ...defaultTypography,
      fontSize: pxToRem(16),
      fontWeight: "normal",
      lineHeight: 1.5
    },
    headline: {
      ...defaultTypography,
      fontSize: pxToRem(14),
      fontWeight: "bold",
      lineHeight: 1.57
    },
    subheading: {
      ...defaultTypography,
      fontSize: pxToRem(14),
      fontWeight: "normal",
      lineHeight: 1.57
    },
    body2: {
      ...defaultTypography,
      fontSize: pxToRem(12),
      fontWeight: "bold",
      lineHeight: 1.67
    },
    body1: {
      ...defaultTypography,
      fontSize: pxToRem(12),
      fontWeight: "normal",
      lineHeight: 1.67
    },
    caption: {
      ...defaultTypography,
      fontSize: pxToRem(11),
      fontWeight: "normal",
      lineHeight: 1.64
    },
    button: {
      ...defaultTypography,
      fontSize: pxToRem(12),
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: 1.67,
      color: palette.general.cta
    }
  },
  palette
});
