import React, { useMemo } from "react";
import { Button, Input, QuickAccess } from "@elements";
import { AuthFormProps } from "./interface";
import { authInput } from "@modules";

const AuthForm: React.FC<AuthFormProps> = ({ typeForm, formik }) => {
	const memoizedAuthInput = useMemo(() => authInput, []);
	const buttonClassName = useMemo(
		() =>
			"font-semibold w-full px-4 py-2 tracking-wide uppercase transition-colors duration-200 transform rounded-lg",
		[]
	);

	return (
		<form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
			{memoizedAuthInput.map(({ name, type }) => {
				const props = {
					name: name,
					value: formik.values[name],
					errorMsg: formik.errors[name],
					errTouched: formik.touched[name],
					handleChange: formik.handleChange,
					handleBlur: formik.handleBlur,
				};

				return type === "ALL" || type === typeForm ? (
					<Input key={name} {...props} />
				) : null;
			})}

			<Button
				errors={formik.errors}
				buttonName={typeForm}
				buttonType="submit"
				className={buttonClassName}
			/>

			{typeForm === "Login" && <QuickAccess />}
		</form>
	);
};

export default AuthForm;
