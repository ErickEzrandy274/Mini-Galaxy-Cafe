import { BaseSyntheticEvent } from "react";
import { FeedbackType } from "@utils";

export interface InputProps {
	name: string;
	value: string;
	error: FeedbackType;
	handleChange: (e: BaseSyntheticEvent) => void;
}
