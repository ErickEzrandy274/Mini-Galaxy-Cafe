import { BaseSyntheticEvent } from "react";
import { FeedbackType } from "../../utils/function";

export interface InputProps {
	name: string;
	handleChange: (e: BaseSyntheticEvent) => void;
	error: FeedbackType;
}
