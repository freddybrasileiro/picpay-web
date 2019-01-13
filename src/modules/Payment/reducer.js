import {
  CLOSE_DIALOG,
  SET_PAYMENT_USER,
  GOT_TO_REGISTER_CARD,
  REGISTER_CARD,
  ON_REGISTER_CARD_FORM_CHANGE,
  ON_PAYMENT_VALUE_CHANGE,
  DO_TRANSACTION,
  DO_TRANSACTION_ERROR,
  DO_TRANSACTION_SUCCESS,
  SHOW_LOADER,
  HIDE_LOADER,
  GO_TO_CARD_LIST,
  SELECT_CARD,
  GO_TO_PAYMENT,
  DIALOG_SCREENS
} from "./constants";

export const paymentInitialState = {
  dialogIsOpen: false,
  dialogScreen: null,
  paymentUser: null,
  creditCards: [],
  registerCardForm: {},
  selectedCreditCardIndex: -1,
  paymentValue: 0,
  transaction: {},
  error: false,
  loading: false
};

const checkIsCardValid = (registerCardForm = {}) => {
  return (
    registerCardForm.name &&
    registerCardForm.brand &&
    registerCardForm.card_number &&
    registerCardForm.expiry_date &&
    registerCardForm.cvv &&
    registerCardForm.zip &&
    registerCardForm.card_number.length === 16 &&
    registerCardForm.expiry_date.length === 6 &&
    registerCardForm.cvv.length === 3 &&
    registerCardForm.zip.length === 8
  );
};

function paymentReducer(state = paymentInitialState, { type, payload }) {
  switch (type) {
    case CLOSE_DIALOG:
      return {
        ...paymentInitialState,
        creditCards: state.creditCards,
        selectedCreditCardIndex: state.selectedCreditCardIndex
      };
    case GOT_TO_REGISTER_CARD:
      return { ...state, dialogScreen: DIALOG_SCREENS.REGISTER_CARD };
    case SET_PAYMENT_USER:
      return {
        ...state,
        dialogIsOpen: true,
        dialogScreen: DIALOG_SCREENS.PAYMENT,
        paymentUser: payload
      };
    case REGISTER_CARD:
      const isCardValid = checkIsCardValid(state.registerCardForm);
      const newCreditCards = [...state.creditCards];
      newCreditCards.push(state.registerCardForm);
      const newCardData = isCardValid
        ? {
            creditCards: newCreditCards,
            registerCardForm: {},
            dialogScreen: DIALOG_SCREENS.PAYMENT,
            selectedCreditCardIndex: newCreditCards.length - 1
          }
        : {};
      return {
        ...state,
        ...newCardData
      };
    case ON_REGISTER_CARD_FORM_CHANGE:
      const newData = state.registerCardForm;
      newData[payload.fieldName] = payload.fieldData;
      return {
        ...state,
        registerCardForm: { ...newData }
      };
    case ON_PAYMENT_VALUE_CHANGE:
      return {
        ...state,
        paymentValue: payload ? parseFloat(payload, 10) : 0
      };
    case DO_TRANSACTION:
      return { ...state, transactionStatus: {}, error: false };
    case DO_TRANSACTION_SUCCESS:
      return {
        ...state,
        transaction: payload.transaction,
        error: false,
        dialogScreen: DIALOG_SCREENS.RECEIPT
      };
    case DO_TRANSACTION_ERROR:
      return { ...state, transactionStatus: {}, error: true };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case GO_TO_CARD_LIST:
      return { ...state, dialogScreen: DIALOG_SCREENS.CARD_LIST };
    case GO_TO_PAYMENT:
      return { ...state, dialogScreen: DIALOG_SCREENS.PAYMENT };
    case SELECT_CARD:
      return {
        ...state,
        selectedCreditCardIndex: payload,
        dialogScreen: DIALOG_SCREENS.PAYMENT
      };
    default:
      return state;
  }
}

export default paymentReducer;
