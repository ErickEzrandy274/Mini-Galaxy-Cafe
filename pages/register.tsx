import Head from "next/head";
import React from "react";
import { Register } from "../components/modules";

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
