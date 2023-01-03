import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { MainLayoutProps, nav } from "./interface";
import { Footer, Navbar, Toaster } from "@elements";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const { pathname } = useRouter();
	const registeredLink: boolean = nav.includes(pathname);

	return (
		<AnimatePresence>
			<div
				className={`flex flex-col justify-between ${
					registeredLink ? `gap-5` : `gap-0`
				} bg-gray-700 min-h-screen`}
			>
				<Navbar />
				{children}
				<Footer />
				<Toaster />
			</div>
		</AnimatePresence>
	);
};

export default MainLayout;
