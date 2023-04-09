import React, { useEffect, useMemo } from "react";
import { useAuth } from "@utils";
import { AuthForm, HandlerAccount } from "@elements";
import { registerObj, registerValidationSchema } from "./constant";
import { useFormik } from "formik";
import Router from "next/router";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, register, errorAuth, setErrorAuth } = useAuth();
	const { initialValues, validationSchema } = useMemo(() => {
		return {
			initialValues: registerObj,
			validationSchema: registerValidationSchema,
		};
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (values) {
				register(values);
				resetForm();
			}
		},
	});

	useEffect(() => {
		user && Router.push("/menu");

		errorAuth && setErrorAuth("");
	}, [user, errorAuth, setErrorAuth]);

	return (
		<BaseAuth typeForm="Register">
			<AuthForm typeForm="Register" formik={formik} />

			<HandlerAccount
				href="/login"
				content="Already have an account?"
				className="text-blue-500 focus:outline-none focus:underline hover:underline"
			/>
		</BaseAuth>
	);
};

export default Register;
