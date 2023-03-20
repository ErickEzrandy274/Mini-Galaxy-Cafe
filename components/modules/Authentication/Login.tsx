import React, { useEffect, useState } from "react";
import { useAuth, useUserStuff } from "@context";
import { LoginInputType, loginObj } from "./interface";
import { AuthForm, HandlerAccount } from "@elements";
import { useHandleAuth } from "@utils";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const { user, errorAuth, setErrorAuth } = useAuth();
	const { handleChange, handleLoginWithEmailAndPassword } = useHandleAuth();
	const { setUserStuff } = useUserStuff();
	const [data, setData] = useState<LoginInputType>(loginObj);

	useEffect(() => {
		user && Router.push("/menu");

		if (errorAuth) {
			setData(loginObj);
			setErrorAuth("");
		}
	}, [user, errorAuth, setErrorAuth, setUserStuff]);

	return (
		<BaseAuth typeForm="Login">
			<AuthForm
				typeForm="Login"
				handleChange={(e) => handleChange(e, setData)}
				handleLogin={(e) => handleLoginWithEmailAndPassword(e, data)}
				{...data}
			/>

			<HandlerAccount
				href="/register"
				content="Don't have an account yet?"
				className="text-blue-500 focus:outline-none focus:underline hover:underline"
			/>
		</BaseAuth>
	);
};

export default Login;
