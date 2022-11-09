import { all, takeEvery } from "redux-saga/effects";
import {
  handleEditKeranjang,
  handleGetKeranjang,
  handleGetOneKeranjang,
} from "./keranjangMiddle";
import * as ActionTypeKeranjang from "../constants/keranjangConstant";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeKeranjang.GET_KERANJANG_REQUEST, handleGetKeranjang),
    takeEvery(ActionTypeKeranjang.EDIT_KERANJANG_REQUEST, handleEditKeranjang),
    takeEvery(
      ActionTypeKeranjang.GET_ONE_KERANJANG_REQUEST,
      handleGetOneKeranjang
    ),
  ]);
}
