import { createSelector } from "reselect";

const selectData = () => state => state || {};

const selectPaymentUser = () =>
  createSelector(selectData(), data => data.paymentUser);

export { selectPaymentUser };
