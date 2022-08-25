/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useEffect } from "react";
import MenuPage from "../components/modules/MenuPage/MenuPage";
import { reloadWarning } from "../components/utils/function/function";

const menu = () => {
	useEffect(() => {
		reloadWarning();
	}, []);

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
