import { put, all, call, takeLatest, take } from "redux-saga/effects";

import { userActionTypes } from "../user/user.types";
import { cartActionTypes } from "./cart.types";

import { clearCart } from "./cart.actions";

export function* onPaymentSuccess() {
  
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
