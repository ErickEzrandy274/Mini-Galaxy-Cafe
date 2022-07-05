import React, { SetStateAction } from "react";

export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[];
}

export interface ModifierButtonProps {
	setIsModifierButtonOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface IncrementDecrementProps {
	onClick: () => void;
}

export interface CheckOutModalButtonProps extends IncrementDecrementProps {}

export interface FavButtonProps {
	cardProps: {
		name: string;
		price: string;
		image: string;
		type: string;
		dataId: string;
	};
	setRemoved: React.Dispatch<SetStateAction<boolean>>;
}
