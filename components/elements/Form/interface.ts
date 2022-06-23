import { DisabilityButtonParamType } from "../../utils/function/function";

export interface AuthFormProps extends DisabilityButtonParamType {
	nickname?: string
	handleChange: (e: any) => void;
	handleRegister?: (e: any) => void;
	handleLogin?: (e: any) => void;
}
