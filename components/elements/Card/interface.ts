export type ProductCardTypes = "Foods" | "Beverages" | "Snacks";
export type ExtendsProductCardTypes =
	| "Foods"
	| "Beverages"
	| "Snacks"
	| "Others";

export interface CardProps {
	name: string;
	image: string;
}

export interface WelcomingCardProps extends CardProps {
	href: string;
	delay: number;
}

export interface ProductCardProps extends CardProps {
	price: number;
	index: number;
	type: ProductCardProps;
	dataId: string;
}

export interface BuyerProduct extends ProductCardProps {
	amount: number;
}
