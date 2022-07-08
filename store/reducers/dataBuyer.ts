import { BuyerProduct } from "../../components/elements/Card/interface";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const initialState: { productList: BuyerProduct[] } = {
	productList: [],
};

const dataBuyerReducer = (
	state = initialState,
	action: { type: string; payload: BuyerProduct }
) => {
	const { type, payload } = action;
	const { productList } = state;
	const index = productList.findIndex(
		({ dataId }) => dataId === payload.dataId
	);

	switch (type) {
		case ADD_PRODUCT:
			if (index === -1) {
				const newProductList = [...productList, payload];

				return {
					...state,
					productList: newProductList,
				};
			} else {
				productList[index] = { ...payload };
				return {
					...state,
				};
			}

		case DELETE_PRODUCT:
			const { amount } = payload;
			if (amount === 0) {
				const newProductList = productList.filter(
					({ dataId }) => dataId !== payload.dataId
				);
				return {
					...state,
					productList: newProductList,
				};
			} else {
				productList[index] = { ...payload };
				return {
					...state,
				};
			}

		default:
			return state;
	}
};

export default dataBuyerReducer;
