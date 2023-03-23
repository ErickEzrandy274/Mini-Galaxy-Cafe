import React, { SetStateAction } from "react";
import {
	BuyerProduct,
	ExtendsProductCardTypes,
	ProductCardTypes,
} from "@elements";

export type DestinationType = "Checkout" | "Payment" | "Cancel Order";

export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	errors: Object;
}

export interface ModifierButtonProps extends BuyerProduct {
	setIsModifierButtonOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface IncrementDecrementProps {
	onClick: () => void;
}

export interface CheckOutModalButtonProps extends IncrementDecrementProps {
	productList?: BuyerProduct[];
	modalBtnType: ExtendsProductCardTypes;
	to: DestinationType;
}

export interface FavCardProps {
	data: {
		name: string;
		price: number;
		image: string;
		type: ProductCardTypes;
		dataId: string;
	};
}

export interface FavButtonProps extends FavCardProps {
	setRemoved: React.Dispatch<SetStateAction<boolean>>;
}
