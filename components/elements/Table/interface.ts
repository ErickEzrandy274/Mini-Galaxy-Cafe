import { BuyerProduct } from "@elements";

export interface CheckoutTableProps {
	products: BuyerProduct[];
}

export interface BodyTableContentProps extends BuyerProduct {
	delay: number;
}
