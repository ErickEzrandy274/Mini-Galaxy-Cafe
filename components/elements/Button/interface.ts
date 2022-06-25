export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[]
	auth: boolean
}
