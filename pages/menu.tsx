import Head from "next/head";
import React from "react";
import MenuPage from "../components/modules/MenuPage/MenuPage";

const menu = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Menu</title>
			</Head>

			<MenuPage />
		</>
	);
};

export default menu;
