import React, { SetStateAction } from "react";
import { BuyerProduct } from "../Card/interface";

export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[];
}

export interface ModifierButtonProps extends BuyerProduct {
	setIsModifierButtonOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface IncrementDecrementProps {
	onClick: () => void;
}

export interface CheckOutModalButtonProps extends IncrementDecrementProps {
	productList: BuyerProduct[]
	type?: "Foods" | "Beverages" | "Snacks"
}

export interface FavButtonProps {
	cardProps: {
		name: string;
		price: number;
		image: string;
		type: string;
		dataId: string;
	};
	setRemoved: React.Dispatch<SetStateAction<boolean>>;
}
