export interface CardProps {
	name: string;
	image: string;
}

export interface WelcomingCardProps extends CardProps {
	href: string;
	index: string;
}

export interface ProductCardProps extends CardProps {
	price: string;
	index: string;
	type: string;
	dataId: string;
}

export interface BuyerProduct extends ProductCardProps {
	amount: number;
}
