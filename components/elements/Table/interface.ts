import { BuyerProduct } from "../Card/interface";

export interface CheckoutTableProps {
	products: BuyerProduct[];
}

export interface BodyTableContentProps extends BuyerProduct {
	delay: number;
}