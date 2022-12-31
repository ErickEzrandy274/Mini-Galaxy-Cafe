import React from "react";

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

export interface BaseAuthProps extends TypeForm {
	children: React.ReactNode;
}

export const loginObj = {
	email: "",
	password: "",
};

export const registerObj = {
	...loginObj,
	nickname: "",
};
