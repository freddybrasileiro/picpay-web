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
  DIALOG_SCREENS
} from "./constants";

import cards from "components/__fixtures__/cards.fixture";

export const paymentInitialState = {
  dialogIsOpen: false,
  dialogScreen: null,
  paymentUser: null,
  creditCards: cards,
  registerCardForm: {},
  selectedCreditCardIndex: 1, //-1,
  paymentValue: 0,
  transaction: {},
  error: false,
  loading: false
};

function paymentReducer(state = paymentInitialState, { type, payload }) {
  switch (type) {
    case CLOSE_DIALOG:
      return { ...paymentInitialState };
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
      const newCreditCards = [...state.creditCards];
      newCreditCards.push(state.registerCardForm);
      return {
        ...state,
        creditCards: newCreditCards,
        registerCardForm: {},
        dialogScreen: DIALOG_SCREENS.PAYMENT,
        selectedCreditCardIndex: newCreditCards.length - 1
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
        paymentValue: payload ? parseInt(payload, 10) : 0
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
    default:
      return state;
  }
}

export default paymentReducer;
