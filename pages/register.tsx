import { Register } from "@modules";
import Head from "next/head";
import React from "react";

const register = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Register</title>
				<meta name="description" content="Mini Galaxy Cafe User Registration" />
			</Head>
			<Register />
		</>
	);
};

export default register;
