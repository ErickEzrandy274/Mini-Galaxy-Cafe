import { MenuPage } from "@modules";
import Head from "next/head";
import React from "react";

const menu = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Menu</title>
				<meta name="description" content="Mini Galaxy Cafe Product Menu" />
			</Head>

			<MenuPage />
		</>
	);
};

export default menu;
