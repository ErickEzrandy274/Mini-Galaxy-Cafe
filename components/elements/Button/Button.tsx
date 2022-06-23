import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	buttonType,
	className,
}) => {
	return (
		<button className={className} type={buttonType}>
			{buttonName}
		</button>
	);
};

export default Button;
