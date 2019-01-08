import { take, call, put, select } from "redux-saga/effects";

import {
  doTransactionSuccess,
  doTransactionError,
  showLoader,
  hideLoader
} from "./actions";
import { DO_TRANSACTION } from "./constants";
import {
  selectPaymentValue,
  selectSelectedCreditCard,
  selectPaymentUser
} from "./selectors";
import { doTransaction } from "./services";

export function* doTransactionSaga() {
  try {
    yield put(showLoader());
    const value = yield select(selectPaymentValue());
    const creditCard = yield select(selectSelectedCreditCard());
    const userId = yield select(selectPaymentUser());
    const payload = {
      card_number: creditCard.card_number,
      cvv: creditCard.cvv,
      value: value,
      expiry_date: creditCard.expiry_date,
      destination_user_id: userId
    };
    const data = yield call(doTransaction, payload);
    yield put(doTransactionSuccess(data));
  } catch (e) {
    yield put(doTransactionError());
  } finally {
    yield put(hideLoader());
  }
}

export function* doTransactionWatcher() {
  while (yield take(DO_TRANSACTION)) {
    yield call(doTransactionSaga);
  }
}
