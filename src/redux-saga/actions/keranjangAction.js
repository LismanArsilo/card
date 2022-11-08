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

export const TotalKeranjangRequest = () => ({
  type: ActionType.TOTAL_KERANJANG_REQUEST,
});
export const TotalKeranjangSuccess = (payload) => ({
  type: ActionType.TOTAL_KERANJANG_SUCCESS,
  payload,
});
export const TotalKeranjangFailed = (payload) => ({
  type: ActionType.TOTAL_KERANJANG_FAILED,
  payload,
});
