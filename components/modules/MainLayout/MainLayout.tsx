import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
	return (
		<div className="flex flex-col gap-10 bg-gray-700 min-h-screen">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
