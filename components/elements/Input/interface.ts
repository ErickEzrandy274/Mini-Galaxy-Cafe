import { FeedbackType } from "../../utils/function/function";

export interface InputProps {
	name: string;
	handleChange: (e: any) => void;
	error: FeedbackType
}
