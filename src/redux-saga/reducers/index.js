import { combineReducers } from "redux";
import keranjangReducer from "./keranjangReducer";

const rootReducers = combineReducers({
  keranjangState: keranjangReducer,
});
export default rootReducers;
