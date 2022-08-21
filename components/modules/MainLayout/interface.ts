import { ReactNode } from "react";

export interface MainLayoutProps {
	children: ReactNode;
}

export const nav: string[] = [
	"/menu",
	"/food",
	"/beverage",
	"/snack",
	"/favorite",
	"/checkout",
	"/login",
	"/register",
];
