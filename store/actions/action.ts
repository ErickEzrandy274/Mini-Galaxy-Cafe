import { ProductCardProps } from "../../components/elements/Card/interface";
import { ADD_PRODUCT } from "../types";

export const add_product = (obj: ProductCardProps, amount: number) => {
    console.log("amount: ", amount)
    return {
        type: ADD_PRODUCT,
        payload: {...obj, amount}
    }
}