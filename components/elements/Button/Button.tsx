import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonType,
	className,
	error,
	auth,
}) => {
	const disable = auth && error.findIndex((item: boolean) => item === true);

	const additionClass = auth &&
		disable === -1
			? `text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none 
			focus:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer`
			: `text-gray-400 bg-gray-500 cursor-not-allowed`;

	return (
		<button
			className={className + additionClass}
			type={buttonType}
			disabled={auth && disable !== -1}
		>
			{buttonName}
		</button>
	);
};

export default Button;
