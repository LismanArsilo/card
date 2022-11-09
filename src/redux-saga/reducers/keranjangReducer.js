import * as ActionType from "../constants/keranjangConstant";

const INIT_STATE = {
  lists: [],
  listOne: [],
  totalPrice: 0,
  loading: false,
};

const keranjangReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_ONE_KERANJANG_REQUEST:
      return { ...state, loading: true };
    case ActionType.GET_ONE_KERANJANG_SUCCESS:
      return GetOneKeranjangSuccedd(state, action);
    case ActionType.GET_KERANJANG_REQUEST:
      return { ...state, loading: true };
    case ActionType.GET_KERANJANG_SUCCESS:
      return GetKeranjangSuccedd(state, action);
    case ActionType.EDIT_KERANJANG_REQUEST:
      return { ...state, loading: true };
    case ActionType.EDIT_KERANJANG_SUCCESS:
      return EditKeranjangSuccedd(state, action);
    default:
      return { ...state };
  }
};
const GetOneKeranjangSuccedd = (state, action) => {
  const { payload } = action;
  const newList = state.lists.filter((el) => el.id === payload);
  return {
    ...state,
    loading: false,
    listOne: newList[0],
  };
};
const GetKeranjangSuccedd = (state, action) => {
  const { payload } = action;
  const total = payload.reduce((a, b) => {
    return a + b.price;
  }, 0);
  const sorting = payload.sort((a, b) => a - b);
  return {
    ...state,
    lists: sorting,
    loading: false,
    totalPrice: Number(total.toFixed(2)),
  };
};
const EditKeranjangSuccedd = (state, action) => {
  const { payload } = action;
  const filter = state.lists.filter((el) => el.id !== payload.id);
  const total = state.totalPrice + payload.price;
  const edit = [...filter, payload];
  const sorting = edit.sort((a, b) => a.id - b.id);
  return {
    ...state,
    lists: sorting,
    loading: false,
    totalPrice: Number(total.toFixed(2)),
  };
};
export default keranjangReducer;
