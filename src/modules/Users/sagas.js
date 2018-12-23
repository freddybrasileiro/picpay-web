import { take, call, put } from "redux-saga/effects";

import {
  getUsersSuccess,
  getUsersError,
  showLoader,
  hideLoader
} from "./actions";
import { GET_USERS } from "./constants";
import { getUsers } from "./services";

export function* getUsersSaga() {
  try {
    yield put(showLoader());
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError());
  } finally {
    yield put(hideLoader());
  }
}

export function* getUsersWatcher() {
  while (yield take(GET_USERS)) {
    yield call(getUsersSaga);
  }
}
