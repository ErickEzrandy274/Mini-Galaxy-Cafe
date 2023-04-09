import React, { useEffect, useMemo } from "react";
import { AuthForm, HandlerAccount } from "@elements";
import { loginObj, loginValidationSchema } from "./constant";
import { useFormik } from "formik";
import { useAuth, useUserStuff } from "@utils";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const { user, loginWithEmailAndPassword, errorAuth, setErrorAuth } =
		useAuth();
	const { setUserStuff } = useUserStuff();

	const { initialValues, validationSchema } = useMemo(() => {
		return {
			initialValues: loginObj,
			validationSchema: loginValidationSchema,
		};
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (values) {
				loginWithEmailAndPassword(values);
				resetForm();
			}
		},
	});

	useEffect(() => {
		user && Router.push("/menu");

		errorAuth && setErrorAuth("");
	}, [user, errorAuth, setErrorAuth, setUserStuff]);

	return (
		<BaseAuth typeForm="Login">
			<AuthForm typeForm="Login" formik={formik} />

			<HandlerAccount
				href="/register"
				content="Don't have an account yet?"
				className="text-blue-500 focus:outline-none focus:underline hover:underline"
			/>
		</BaseAuth>
	);
};

export default Login;
