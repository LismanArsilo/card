import { all, takeEvery } from "redux-saga/effects";
import { handleGetKeranjang } from "./keranjangMiddle";
import * as ActionTypeKeranjang from "../constants/keranjangConstant";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeKeranjang.GET_KERANJANG_REQUEST, handleGetKeranjang),
  ]);
}
