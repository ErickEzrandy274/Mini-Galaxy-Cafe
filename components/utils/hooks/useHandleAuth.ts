import { BaseSyntheticEvent, useCallback } from "react";
import { useAuth } from "context";
import { LoginInputType, RegisterInputType } from "@modules";

const useHandleAuth = () => {
	const { loginWithEmailAndPassword, register } = useAuth();

	const handleChange = useCallback((e: BaseSyntheticEvent, setData: any) => {
		const { name, value } = e.target;

		setData((prevData: any) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}, []);

	const handleLoginWithEmailAndPassword = async (
		e: BaseSyntheticEvent,
		data: LoginInputType
	) => {
		e.preventDefault();
		await loginWithEmailAndPassword(data);
	};

	const handleRegister = async (
		e: BaseSyntheticEvent,
		data: RegisterInputType
	) => {
		e.preventDefault();
		await register(data);
	};

	return {
		handleLoginWithEmailAndPassword,
		handleChange,
		handleRegister,
	};
};

export default useHandleAuth;
