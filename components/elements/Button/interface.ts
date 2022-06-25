import { SetStateAction } from "react";

export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[]
}

export interface ModifierButtonProps {
	setIsModifierButtonOpen: React.Dispatch<SetStateAction<boolean>>
}

export interface IncrementDecrementProps {
	onClick: () => void
}