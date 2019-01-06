import { SET_PAYMENT_USER } from "./constants";

export function setPaymentUser(payload) {
  return {
    type: SET_PAYMENT_USER,
    payload
  };
}
