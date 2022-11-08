import * as ActionType from "../constants/keranjangConstant";

const INIT_STATE = {
  lists: [],
  totalPrice: 0,
  loading: false,
};

const keranjangReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_KERANJANG_REQUEST:
      return { ...state, loading: true };
    case ActionType.GET_KERANJANG_SUCCESS:
      return GetKeranjangSuccedd(state, action);
    case ActionType.TOTAL_KERANJANG_REQUEST:
      return { ...state, loading: true };
    case ActionType.TOTAL_KERANJANG_SUCCESS:
      return getTotalSuccedd(state, action);
    default:
      return { ...state };
  }
};
const GetKeranjangSuccedd = (state, action) => {
  const { payload } = action;
  const total = payload.reduce((a, b) => {
    return a + b.price;
  }, 0);
  return {
    ...state,
    lists: payload,
    loading: false,
    totalPrice: Number(total.toFixed(2)),
  };
};
const getTotalSuccedd = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};
export default keranjangReducer;
