import { createSelector } from "reselect";

const selectData = () => state => state.payment || {};

const selectPaymentUser = () =>
  createSelector(selectData(), data => data.paymentUser);
const selectIsDialogOpen = () =>
  createSelector(selectData(), data => data.dialogIsOpen);
const selectDialogScreen = () =>
  createSelector(selectData(), data => data.dialogScreen);

export { selectPaymentUser, selectIsDialogOpen, selectDialogScreen };
