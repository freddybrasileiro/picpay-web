import {
  CLOSE_DIALOG,
  SET_PAYMENT_USER,
  GOT_TO_REGISTER_CARD
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
