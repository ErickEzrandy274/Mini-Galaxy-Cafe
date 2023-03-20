import React, {
	BaseSyntheticEvent,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useAuth, useUserStuff } from "@context";
import { LoginInputType, loginObj } from "./interface";
import { AuthForm, HandlerAccount } from "@elements";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const { user, loginWithEmailAndPassword, errorAuth, setErrorAuth } =
		useAuth();
	const { setUserStuff } = useUserStuff();
	const [data, setData] = useState<LoginInputType>(loginObj);

	const handleChange = useCallback((e: BaseSyntheticEvent) => {
		const { name, value } = e.target;

		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}, []);

	const handleLoginWithEmailAndPassword = async (e: BaseSyntheticEvent) => {
		e.preventDefault();
		await loginWithEmailAndPassword(data);
		// Router.push("/menu");
	};

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
