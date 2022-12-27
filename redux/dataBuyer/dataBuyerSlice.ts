// reference https://medium.com/@firmnardians/pakai-redux-toolkit-dan-redux-persist-di-next-js-4579b1182096
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuyerProduct } from "../../components/elements/Card/interface";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../store/types";
import { RootState } from "../store/store";

export const initialState: { productList: BuyerProduct[] } = {
	productList: [],
};

interface PayloadActionProps {
	obj: BuyerProduct;
	type: string;
}

const dataBuyerSlice = createSlice({
	name: "dataBuyer",
	initialState,
	reducers: {
		handleDataBuyer(state, action: PayloadAction<PayloadActionProps>) {
			const { productList } = state;
			const {
				payload: { obj, type },
			} = action;
			const index = productList.findIndex(
				({ dataId }) => dataId === obj?.dataId
			);

			switch (type) {
				case ADD_PRODUCT:
					if (index === -1) {
						state.productList = [...productList, obj];
					} else {
						const { amount } = obj;
						state.productList[index] = { ...productList[index], amount };
					}

				case DELETE_PRODUCT:
					const { amount } = obj;
					if (amount === 0) {
						state.productList = productList.filter(
							({ dataId }) => dataId !== obj?.dataId
						);
					} else {
						state.productList[index] = { ...productList[index], amount };
					}
				default:
					return state;
			}
		},

		set_productlist(
			state,
			action: PayloadAction<{
				obj: BuyerProduct[];
			}>
		) {
			state.productList = action.payload.obj;
		},

		reset_product(state) {
			return {
				...state,
				productList: [],
			};
		},
	},
});

export const selectProductList = ({ dataBuyer }: RootState) => {
	return dataBuyer.productList;
};

export const { handleDataBuyer, reset_product, set_productlist } =
	dataBuyerSlice.actions;
const dataBuyerReducer = dataBuyerSlice.reducer;
export default dataBuyerReducer;
