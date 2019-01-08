import { createSelector } from "reselect";

const selectData = () => state => state.payment || {};

const selectPaymentUser = () =>
  createSelector(selectData(), data => data.paymentUser);
const selectIsDialogOpen = () =>
  createSelector(selectData(), data => data.dialogIsOpen);
const selectDialogScreen = () =>
  createSelector(selectData(), data => data.dialogScreen);
const selectCreditCards = () =>
  createSelector(selectData(), data => data.creditCards);
const selectRegisterCardFormData = () =>
  createSelector(selectData(), data => data.registerCardForm);
const selectSelectedCreditCard = () =>
  createSelector(
    selectData(),
    data => data.creditCards[data.selectedCreditCardIndex]
  );
const selectPaymentValue = () =>
  createSelector(selectData(), data => data.paymentValue);
const selectTransaction = () =>
  createSelector(selectData(), data => data.transaction);
const selectHasError = () => createSelector(selectData(), data => data.error);
const selectIsLoading = () =>
  createSelector(selectData(), data => data.loading);

export {
  selectPaymentUser,
  selectIsDialogOpen,
  selectDialogScreen,
  selectCreditCards,
  selectRegisterCardFormData,
  selectSelectedCreditCard,
  selectPaymentValue,
  selectTransaction,
  selectHasError,
  selectIsLoading
};
