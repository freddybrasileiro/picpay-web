import {
  CLOSE_DIALOG,
  SET_PAYMENT_USER,
  GOT_TO_REGISTER_CARD,
  REGISTER_CARD,
  ON_REGISTER_CARD_FORM_CHANGE,
  ON_PAYMENT_VALUE_CHANGE,
  DIALOG_SCREENS
} from "./constants";

export const paymentInitialState = {
  dialogIsOpen: false,
  dialogScreen: null,
  paymentUser: null,
  creditCards: [],
  registerCardForm: {},
  selectedCreditCardIndex: -1,
  paymentValue: 0
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
    default:
      return state;
  }
}

export default paymentReducer;
