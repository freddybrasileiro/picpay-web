import { createSelector } from "reselect";

const selectData = () => state => state.users || {};

const selectContract = () => createSelector(selectData(), data => data.data);

export { selectContract };
