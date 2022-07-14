import Head from "next/head";
import React from "react";
import Register from "../components/modules/Authentication/Register";

const register = () => {
	return (
		<>
			<Head>
				<title>Mini Galaxy Cafe | Register</title>
			</Head>
			<Register />
		</>
	);
};

export default register;
