import { BaseSyntheticEvent } from "react";

export interface InputProps {
	name: string;
	value: string;
	errorMsg: string;
	errTouched: boolean;
	handleChange: (e: BaseSyntheticEvent) => void;
	handleBlur: (e: BaseSyntheticEvent) => void;
}
