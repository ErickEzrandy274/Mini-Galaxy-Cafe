import { ProductCardProps } from "../../components/elements/Card/interface";
import { ADD_PRODUCT } from "../types";

interface BuyerProduct extends ProductCardProps {
    amount: number
}

const initialState: { productList: BuyerProduct[] } = {
	productList: [],
};

const dataBuyerReducer = (state = initialState, action: {type: string, payload: BuyerProduct}) => {
	const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT:
            const index = state.productList.findIndex(({ dataId }) => dataId === payload.dataId)
            const { productList } = state

            if (index === -1) {
                const newProductList = [...productList, payload]
                
                return {
                    ...state,
                    productList: newProductList
                }
            } else {
                productList[index] = { ...payload }
                return {
                    ...state,
                }
            }
		default:
			return state;
	}
};

export default dataBuyerReducer;
