import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import { RegisterInputType, registerObj } from "./interface";
import AuthForm from "../../elements/Form";
import HandlerAccount from "../../elements/HandlerAccount";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, register } = useAuth();
	const { push } = useRouter();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>(registerObj);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleRegister = async (e: any) => {
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
			setTimeout(() => {
				setData(registerObj);
				setError(null);
			}, 3500);
		}
	}, [user, error, push]);

	return (
		<BaseAuth typeForm="Register" error={error}>
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
