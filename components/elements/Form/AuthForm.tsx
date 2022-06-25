import React from "react";
import { checkDisabilityButton, FeedbackType } from "../../utils/function/function";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { AuthFormProps } from "./interface";

const AuthForm: React.FC<AuthFormProps> = ({
	typeForm,
	handleChange,
	handleLogin,
	handleRegister,
	email,
	password,
	nickname,
}) => {
    const dataError: FeedbackType[] = checkDisabilityButton({
		typeForm,
		email,
		password,
		nickname,
    });

    const disableButton = dataError.map((item: FeedbackType) => item.disable)

	return (
		<form
			onSubmit={typeForm === "Login" ? handleLogin : handleRegister}
			className="flex flex-col gap-4"
		>
			{typeForm === "Register" && (
				<Input name="nickname" handleChange={handleChange} error={dataError[2]} />
			)}
			<Input name="email" handleChange={handleChange} error={dataError[1]} />
			<Input name="password" handleChange={handleChange} error={dataError[0]} />

			<Button
				auth
				error={disableButton}
				buttonName={typeForm}
				buttonType="submit"
				className="font-semibold w-full px-4 py-2 tracking-wide uppercase
                        transition-colors duration-200 transform rounded-lg "
			/>
		</form>
	);
};

export default AuthForm;
