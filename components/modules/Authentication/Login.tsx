import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";
import { getBuyerProduct } from "../../utils/function/dataManipulation";
import { LoginInputType, loginObj } from "./interface";
import { useUserStuff } from "../../../context/UserStuffContext";
import AuthForm from "../../elements/Form/AuthForm";
import HandlerAccount from "../../elements/HandlerAccount/HandlerAccount";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const { push } = useRouter();
	const { user, login, error, setError } = useAuth();
	const { setUserStuff } = useUserStuff();
	const [data, setData] = useState<LoginInputType>(loginObj);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleLogin = async (e: any) => {
		e.preventDefault();
		await login(data.email, data.password);
		push("/menu");
	};

	useEffect(() => {
		if (user) {
			const fetchData = async () => {
				const { buyerProduct } = await getBuyerProduct(user.uid);
				setUserStuff(buyerProduct);
			};
			fetchData();
			push("/menu");
		}

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
				handleLogin={handleLogin}
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
