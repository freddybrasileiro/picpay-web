import {
  CLOSE_DIALOG,
  SET_PAYMENT_USER,
  GOT_TO_REGISTER_CARD,
  ON_REGISTER_CARD_FORM_CHANGE,
  ON_PAYMENT_VALUE_CHANGE,
  DO_TRANSACTION,
  DO_TRANSACTION_ERROR,
  DO_TRANSACTION_SUCCESS,
  SHOW_LOADER,
  HIDE_LOADER,
  REGISTER_CARD,
  SELECT_CARD,
  GO_TO_CARD_LIST,
  GO_TO_PAYMENT
} from "./constants";

export function goToPayment() {
  return {
    type: GO_TO_PAYMENT
  };
}

export function setSelectedCreditCard(payload) {
  return {
    type: SELECT_CARD,
    payload
  };
}

export function goToCreditCardList() {
  return {
    type: GO_TO_CARD_LIST
  };
}

export function doTransaction() {
  return {
    type: DO_TRANSACTION
  };
}

export function doTransactionError() {
  return {
    type: DO_TRANSACTION_ERROR
  };
}

export function doTransactionSuccess(payload) {
  return {
    type: DO_TRANSACTION_SUCCESS,
    payload
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}

export function setPaymentUser(payload) {
  return {
    type: SET_PAYMENT_USER,
    payload
  };
}

export function goToRegisterCard() {
  return {
    type: GOT_TO_REGISTER_CARD
  };
}

export function registerCard() {
  return {
    type: REGISTER_CARD
  };
}

export function onRegisterCardFormChange(payload) {
  return {
    type: ON_REGISTER_CARD_FORM_CHANGE,
    payload
  };
}

export function onPaymentValueChange(payload) {
  return {
    type: ON_PAYMENT_VALUE_CHANGE,
    payload
  };
}
