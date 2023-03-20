import React, { useMemo } from "react";
import { ButtonProps } from "./interface";
import { checkingDisabledButton } from "./constants";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonType,
	className,
	error,
}) => {
	const { additionClass, disable } = useMemo(() => {
		return checkingDisabledButton(error);
	}, [error]);

	return (
		<button
			aria-label={buttonName}
			aria-labelledby={buttonName}
			className={className + additionClass}
			type={buttonType}
			disabled={disable}
		>
			{buttonName}
		</button>
	);
};

export default Button;
