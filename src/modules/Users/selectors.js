import { createSelector } from "reselect";

const selectData = () => state => state.users || {};

const selectUsers = () => createSelector(selectData(), data => data.list);
const selectIsLoading = () =>
  createSelector(selectData(), data => data.loading);
const selectHasError = () => createSelector(selectData(), data => data.error);

export { selectUsers, selectIsLoading, selectHasError };
