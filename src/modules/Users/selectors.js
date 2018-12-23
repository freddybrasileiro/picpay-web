import { createSelector } from "reselect";

const selectData = () => state => state || {};

const selectUsers = () => createSelector(selectData(), data => data.users);
const selectIsLoading = () =>
  createSelector(selectData(), data => data.loading);
const selectHasError = () => createSelector(selectData(), data => data.error);

export { selectUsers, selectIsLoading, selectHasError };
