import { BuyerProduct } from "../Card/interface";

export interface TooltipProps {
	productList: BuyerProduct[]
    type: "Foods" | "Beverages" | "Snacks" | "Others"
}