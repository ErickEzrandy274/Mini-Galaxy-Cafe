// reference https://medium.com/@firmnardians/pakai-redux-toolkit-dan-redux-persist-di-next-js-4579b1182096
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuyerProduct } from "@elements";

export const initialState: { productList: BuyerProduct[] } = {
	productList: [],
};

const dataBuyerSlice = createSlice({
	name: "dataBuyer",
	initialState,
	reducers: {
		addDataBuyer: (state, { payload }: PayloadAction<BuyerProduct>) => {
			const index = state.productList.findIndex(
				({ dataId }) => dataId === payload.dataId
			);

			if (index === -1) {
				state.productList = [...state.productList, payload];
			} else {
				const { amount } = payload;
				state.productList[index] = { ...state.productList[index], amount };
			}
		},

		deleteDataBuyer: (state, { payload }: PayloadAction<BuyerProduct>) => {
			const { amount } = payload;
			const index = state.productList.findIndex(
				({ dataId }) => dataId === payload.dataId
			);

			if (amount === 0) {
				state.productList = state.productList.filter(
					({ dataId }) => dataId !== payload.dataId
				);
			} else {
				state.productList[index] = { ...state.productList[index], amount };
			}
		},

		setProductlist: (state, { payload }: PayloadAction<BuyerProduct[]>) => {
			state.productList = payload;
		},

		resetProduct: (state) => {
			return {
				...state,
				productList: [],
			};
		},
	},
});

export const { addDataBuyer, deleteDataBuyer, resetProduct, setProductlist } =
	dataBuyerSlice.actions;

const dataBuyerReducer = dataBuyerSlice.reducer;
export default dataBuyerReducer;
