import { SET_PAYMENT_USER, DIALOG_SCREENS } from "./constants";

export const usersInitialState = {
  dialogOpen: false,
  dialogScreen: null,
  paymentUser: null
};

function signinReducer(state = usersInitialState, { type, payload }) {
  switch (type) {
    case SET_PAYMENT_USER:
      return {
        ...state,
        dialogOpen: true,
        dialogScreen: DIALOG_SCREENS.PAYMENT,
        paymentUser: payload
      };
    default:
      return state;
  }
}

export default signinReducer;
