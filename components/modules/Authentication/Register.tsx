import React, {
	BaseSyntheticEvent,
	useCallback,
	useEffect,
	useState,
} from "react";
import { useAuth } from "@context";
import { RegisterInputType, registerObj } from "./interface";
import { AuthForm, HandlerAccount } from "@elements";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, register, errorAuth, setErrorAuth } = useAuth();
	const [data, setData] = useState<RegisterInputType>(registerObj);

	const handleChange = useCallback((e: BaseSyntheticEvent) => {
		const { name, value } = e.target;
		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}, []);

	const handleRegister = async (e: BaseSyntheticEvent) => {
		e.preventDefault();
		await register(data);
	};

	useEffect(() => {
		user && Router.push("/menu");

		if (errorAuth) {
			setData(registerObj);
			setErrorAuth("");
		}
	}, [user, errorAuth, setErrorAuth]);

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
