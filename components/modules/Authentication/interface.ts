import { MainLayoutProps } from "../MainLayout/interface";

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

export const loginObj = {
	email: "",
	password: "",
};

export const registerObj = {
	...loginObj,
	nickname: "",
};
