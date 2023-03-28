import React, { useMemo } from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonType,
	className,
	errors,
}) => {
	const disable: boolean = useMemo(
		() => Object.values(errors).some((value) => value !== ""),
		[errors]
	);

	const additionClass = useMemo(() => {
		return disable
			? "text-gray-400 bg-gray-500 cursor-not-allowed"
			: "text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer";
	}, [disable]);

	return (
		<button
			aria-label={buttonName}
			aria-labelledby={buttonName}
			className={`${className} ${additionClass}`}
			type={buttonType}
			disabled={disable}
		>
			<p className="pt-1">{buttonName}</p>
		</button>
	);
};

export default Button;
