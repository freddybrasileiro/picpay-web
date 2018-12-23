import { take, call } from "redux-saga/effects";

import { GET_USERS } from "./constants";

export function* getUsers() {
  try {
    debugger;
  } catch (e) {
    debugger;
  } finally {
    debugger;
  }
}

export function* getUsersWatcher() {
  while (yield take(GET_USERS)) {
    yield call(getUsers);
  }
}
