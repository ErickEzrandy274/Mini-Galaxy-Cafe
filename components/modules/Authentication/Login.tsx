import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { LoginInputType, loginObj } from "./interface";
import { useUserStuff } from "../../../context/UserStuffContext";
import AuthForm from "../../elements/Form";
import HandlerAccount from "../../elements/HandlerAccount";
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
			setTimeout(() => {
				setData(loginObj);
				setError(null);
			}, 3500);
		}
	}, [user, error, push, setError, setUserStuff]);

	return (
		<BaseAuth typeForm="Login" error={error}>
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
