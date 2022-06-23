import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { AuthFormProps } from "./interface";

const AuthForm: React.FC<AuthFormProps> = ({
	typeForm,
	handleChange,
	handleLogin,
	handleRegister,
}) => {
	return (
		<form
			onSubmit={typeForm === "Login" ? handleLogin : handleRegister}
			className="flex flex-col gap-2"
		>
			{typeForm === "Register" && (
				<Input name="nickname" handleChange={handleChange} />
			)}
			<Input name="email" handleChange={handleChange} />
			<Input name="password" handleChange={handleChange} />

			<Button
				buttonName={typeForm}
				buttonType="submit"
				className="font-semibold w-full px-4 py-2 tracking-wide text-white uppercase
                        transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 
                            focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
			/>
		</form>
	);
};

export default AuthForm;
