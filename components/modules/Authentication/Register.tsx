import React, { useEffect, useState } from "react";
import { useAuth } from "@context";
import { RegisterInputType, registerObj } from "./interface";
import { AuthForm, HandlerAccount } from "@elements";
import { useHandleAuth } from "@utils";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, errorAuth, setErrorAuth } = useAuth();
	const { handleChange, handleRegister } = useHandleAuth();
	const [data, setData] = useState<RegisterInputType>(registerObj);

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
				handleChange={(e) => handleChange(e, setData)}
				handleRegister={(e) => handleRegister(e, data)}
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
