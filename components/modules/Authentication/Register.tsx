import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context";
import { extractError } from "../../utils/function/function";
import { RegisterInputType, registerObj } from "./interface";
import { AuthForm, HandlerAccount } from "../../elements";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, register } = useAuth();
	const { push } = useRouter();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>(registerObj);

	const handleChange = (e: BaseSyntheticEvent) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleRegister = async (e: BaseSyntheticEvent) => {
		e.preventDefault();

		try {
			await register(data.email, data.password, data.nickname);
			push("/menu");
		} catch (err: any) {
			setError(extractError(err));
		}
	};

	useEffect(() => {
		user && push("/menu");

		if (error) {
			const errorTimeOut = setTimeout(() => {
				setData(registerObj);
				setError("");
			}, 3500);

			return clearTimeout(errorTimeOut);
		}
	}, [user, error, push]);

	return (
		<BaseAuth typeForm="Register">
			<AuthForm
				typeForm="Register"
				handleChange={handleChange}
				handleRegister={handleRegister}
				{...data}
			/>

			<HandlerAccount
				href="/login"
				content="Already have an account?"
				className="text-blue-500 focus:outline-none focus:underline hover:underline"
			/>
		</BaseAuth>
	);
};

export default Register;
