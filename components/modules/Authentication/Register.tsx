import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import AuthForm from "../../elements/Form/AuthForm";
import HandlerAccount from "../../elements/HandlerAccount/HandlerAccount";
import { extractError } from "../../utils/function/function";
import BaseAuth from "./BaseAuth";
import { RegisterInputType } from "./interface";

const Register = () => {
	const { user, register } = useAuth();
	const router = useRouter();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>({
		email: "",
		password: "",
		nickname: "",
	});

	const handleChange = (e: any) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleRegister = async (e: any) => {
		e.preventDefault();

		try {
			await register(data.email, data.password, data.nickname);
			router.push("/menu");
		} catch (err: any) {
			setError(extractError(err));
		}
	};

	useEffect(() => {
		if (user) {
			router.push("/menu");
		}

		if (error) {
			setTimeout(() => {
				setData({
					email: "",
					password: "",
					nickname: "",
				});
				setError(null);
			}, 3500);
		}
	}, [user, error, router]);

	return (
        <BaseAuth typeForm="Register" error={error}>
            <AuthForm typeForm="Register" handleChange={handleChange} handleRegister={handleRegister} {...data} />

			<HandlerAccount
				href="/login"
				content="Already have an account?"
				className="text-blue-500 focus:outline-none focus:underline hover:underline"
			/>
		</BaseAuth>
	);
};

export default Register;
