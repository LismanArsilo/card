import { call, put } from "redux-saga/effects";
import {
  GetKeranjangFailed,
  GetKeranjangSuccess,
  EditKeranjangSuccess,
  EditKeranjangFailed,
  GetOneKeranjangSuccess,
  GetOneKeranjangFailed,
} from "../actions/keranjangAction";
const lists = [
  {
    id: 1,
    name: "Chocolate",
    type: "Cappucino",
    size: "Small",
    price: 17.3,
    qty: 1,
  },
  {
    id: 2,
    name: "Moocca",
    type: "Milk",
    size: "Small",
    price: 10.9,
    qty: 1,
  },
  {
    id: 3,
    name: "Coffee",
    type: "Vietnam",
    size: "Large",
    price: 15.2,
    qty: 1,
  },
];

function* handleGetOneKeranjang(action) {
  const { payload } = action;
  try {
    yield put(GetOneKeranjangSuccess(payload));
  } catch (error) {
    yield put(GetOneKeranjangFailed(error));
  }
}
function* handleGetKeranjang() {
  try {
    yield put(GetKeranjangSuccess(lists));
  } catch (error) {
    yield put(GetKeranjangFailed(error));
  }
}

function* handleEditKeranjang(action) {
  const { payload } = action;
  try {
    yield put(EditKeranjangSuccess(payload));
  } catch (error) {
    yield put(EditKeranjangFailed(error));
  }
}

export { handleGetKeranjang, handleEditKeranjang, handleGetOneKeranjang };
