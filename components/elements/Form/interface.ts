import { BaseSyntheticEvent } from "react";
import { DisabilityButtonParamType } from "../../utils/function/function";

export interface AuthFormProps extends DisabilityButtonParamType {
	nickname?: string;
	handleChange: (e: BaseSyntheticEvent) => void;
	handleRegister?: (e: BaseSyntheticEvent) => void;
	handleLogin?: (e: BaseSyntheticEvent) => void;
}
