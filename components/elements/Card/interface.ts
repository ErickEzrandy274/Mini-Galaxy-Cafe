export interface CardProps {
	name: string;
	image: string;
}

export interface WelcomingCardProps extends CardProps {
	href: string;
	index: string;
}

export interface ProductCardProps extends CardProps {
	price: number;
	index: string;
	type: "Foods" | "Beverages" | "Snacks";
	dataId: string;
}

export interface BuyerProduct extends ProductCardProps {
	amount: number;
}
