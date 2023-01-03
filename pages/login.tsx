import Head from "next/head";
import React from "react";
import { Login } from "@modules";

const login = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Login</title>
				<meta name="description" content="Mini Galaxy Cafe User Sign In" />
			</Head>
			<Login />
		</>
	);
};

export default login;
