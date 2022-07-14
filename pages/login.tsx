import Head from "next/head";
import React from "react";
import Login from "../components/modules/Authentication/Login";

const login = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Login</title>
			</Head>
			<Login />
		</>
	);
};

export default login;
