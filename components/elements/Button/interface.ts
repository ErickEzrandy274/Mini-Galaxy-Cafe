export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[];
}

export interface FavButtonProps {
	name: string;
	initialState?: boolean;
	listFavId: string[];
	dataId: string;
}
