import { combineReducers } from "@reduxjs/toolkit";
import dataBuyerReducer from "../dataBuyer/slice";

const rootReducer = combineReducers({
	dataBuyer: dataBuyerReducer,
});

export default rootReducer;
