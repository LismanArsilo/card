import * as ActionType from "../constants/keranjangConstant";

export const GetKeranjangRequest = () => ({
  type: ActionType.GET_KERANJANG_REQUEST,
});
export const GetKeranjangSuccess = (payload) => ({
  type: ActionType.GET_KERANJANG_SUCCESS,
  payload,
});
export const GetKeranjangFailed = (payload) => ({
  type: ActionType.GET_KERANJANG_FAILED,
  payload,
});

export const GetOneKeranjangRequest = (payload) => ({
  type: ActionType.GET_ONE_KERANJANG_REQUEST,
  payload,
});
export const GetOneKeranjangSuccess = (payload) => ({
  type: ActionType.GET_ONE_KERANJANG_SUCCESS,
  payload,
});
export const GetOneKeranjangFailed = (payload) => ({
  type: ActionType.GET_ONE_KERANJANG_FAILED,
  payload,
});

export const EditKeranjangRequest = (payload) => ({
  type: ActionType.EDIT_KERANJANG_REQUEST,
  payload,
});
export const EditKeranjangSuccess = (payload) => ({
  type: ActionType.EDIT_KERANJANG_SUCCESS,
  payload,
});
export const EditKeranjangFailed = (payload) => ({
  type: ActionType.EDIT_KERANJANG_FAILED,
  payload,
});
