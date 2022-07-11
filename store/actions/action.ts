import { ProductCardProps } from "../../components/elements/Card/interface";
import { ADD_PRODUCT, DELETE_PRODUCT, RESET_PRODUCT } from "../types";

export const add_product = (obj: ProductCardProps, amount: number) => {
	return {
		type: ADD_PRODUCT,
		payload: { ...obj, amount },
	};
};

export const delete_product = (obj: ProductCardProps, amount: number) => {
	return {
		type: DELETE_PRODUCT,
		payload: { ...obj, amount },
	};
};

export const reset_product = () => {
	return {
		type: RESET_PRODUCT,
	};
};
