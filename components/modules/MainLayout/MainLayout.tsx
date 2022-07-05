import { useRouter } from "next/router";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const { pathname } = useRouter()
	const nav: string[] = ["/", "/food", "/beverage", "/snack", "/favorite", "/checkout"]
	const registeredLink: boolean = nav.includes(pathname)
	
	return (
		<div className={`flex flex-col justify-between ${registeredLink ? `gap-5` : `gap-0`} bg-gray-700 min-h-screen`}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
