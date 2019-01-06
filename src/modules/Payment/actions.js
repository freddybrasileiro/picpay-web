import { CLOSE_DIALOG, SET_PAYMENT_USER } from "./constants";

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
