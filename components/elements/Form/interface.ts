import { TypeForm } from "../../modules/Authentication/interface";

export interface AuthFormProps extends TypeForm {
	handleChange: (e: any) => void;
	handleRegister?: (e: any) => void;
	handleLogin?: (e: any) => void;
}
