import { combineReducers } from "redux";
import dataBuyer from "./dataBuyer";

export default combineReducers({
	buyerProduct: dataBuyer,
});
