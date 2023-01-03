import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth, useUserStuff } from "../../../context";
import { LoginInputType, loginObj } from "./interface";
import { AuthForm, HandlerAccount } from "../../elements";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const { push } = useRouter();
	const { user, loginWithEmailAndPassword, error, setError } = useAuth();
	const { setUserStuff } = useUserStuff();
	const [data, setData] = useState<LoginInputType>(loginObj);

	const handleChange = (e: BaseSyntheticEvent) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleLoginWithEmailAndPassword = async (e: BaseSyntheticEvent) => {
		e.preventDefault();
		await loginWithEmailAndPassword(data.email, data.password);
		push("/menu");
	};

	useEffect(() => {
		user && push("/menu");

		if (error) {
			const errorTimeOut = setTimeout(() => {
				setData(loginObj);
				setError("");
			}, 3500);

			return clearTimeout(errorTimeOut);
		}
	}, [user, error, push, setError, setUserStuff]);

	return (
		<BaseAuth typeForm="Login">
			<AuthForm
				typeForm="Login"
				handleChange={handleChange}
				handleLogin={handleLoginWithEmailAndPassword}
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
