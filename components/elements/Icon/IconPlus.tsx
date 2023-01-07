import React, { useState } from "react";
import { IconTrashProps } from "./interface";

const IconPlus: React.FC<IconTrashProps> = ({
	width = 24,
	height = 24,
	onClick,
}) => {
	const [isHovered, setHovered] = useState<boolean>(false);

	return (
		<svg
			className="cursor-pointer scale-110"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			onClick={onClick}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<path
				fill={isHovered ? "#C8C6C6" : "#FFFFFF"}
				fillRule="evenodd"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default IconPlus;
