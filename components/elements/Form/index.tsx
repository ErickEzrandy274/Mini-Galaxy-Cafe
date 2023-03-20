import React, { useMemo } from "react";
import { checkDisabilityButton, FeedbackType } from "@utils";
import { Button, Input, QuickAccess } from "@elements";
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

	const disableButton = useMemo(
		() => dataError?.map((item: FeedbackType) => item.disable),
		[dataError]
	);

	return (
		<form
			onSubmit={typeForm === "Login" ? handleLogin : handleRegister}
			className="flex flex-col gap-4"
		>
			{typeForm === "Register" && (
				<Input
					value={nickname!}
					name="nickname"
					handleChange={handleChange}
					error={dataError[2]}
				/>
			)}

			<Input
				value={email}
				name="email"
				handleChange={handleChange}
				error={dataError[1]}
			/>

			<Input
				value={password}
				name="password"
				handleChange={handleChange}
				error={dataError[0]}
			/>

			<Button
				error={disableButton}
				buttonName={typeForm}
				buttonType="submit"
				className="font-semibold w-full px-4 py-2 tracking-wide uppercase
                        transition-colors duration-200 transform rounded-lg "
			/>

			{typeForm === "Login" && <QuickAccess />}
		</form>
	);
};

export default AuthForm;
