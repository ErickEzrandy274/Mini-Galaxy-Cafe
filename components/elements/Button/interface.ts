import { FeedbackType } from "../../utils/function/function";

export interface ButtonProps {
	buttonName: string;
	buttonType: "button" | "submit";
	className: string;
	error: boolean[]
}
