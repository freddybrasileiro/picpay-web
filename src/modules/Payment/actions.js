import {
  CLOSE_DIALOG,
  SET_PAYMENT_USER,
  GOT_TO_REGISTER_CARD,
  ON_REGISTER_CARD_FORM_CHANGE,
  ON_PAYMENT_VALUE_CHANGE,
  REGISTER_CARD
} from "./constants";

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
