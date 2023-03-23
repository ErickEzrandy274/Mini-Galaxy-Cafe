import { MainLayoutProps } from "@modules";

export interface LoginInputType {
	email: string;
	password: string;
}

export interface RegisterInputType extends LoginInputType {
	nickname: string;
}

export interface TypeForm {
	typeForm: "Login" | "Register";
}

export interface BaseAuthProps extends TypeForm, MainLayoutProps {}
