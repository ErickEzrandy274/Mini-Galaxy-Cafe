import React, { useState } from "react";
import { IconTrashProps } from "./interface";

const IconTrash: React.FC<IconTrashProps> = ({
	onClick,
	width = 20,
	height = 20,
}) => {
	const [isHovered, setHovered] = useState<boolean>(false);

	return (
		<svg
			className="cursor-pointer"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			imageRendering="optimizeQuality"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			viewBox="0 0 269 339"
			width={width}
			height={height}
			onClick={onClick}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<path
				fill={isHovered ? "#929AAB" : "#FFFFFF"}
				fillRule="nonzero"
				d="M253 134l-24 182c-2 13-13 23-27 23H67c-13 0-24-10-26-23L17 134c-2-16 10-30 26-30h183c16 0 29 14 27 30zm-48 179l24-182c1-2-1-3-3-3H43c-2 0-3 1-3 3l24 182c0 1 2 2 3 2h135c2 0 3-1 3-2zM32 29h39c2-16 17-29 34-29h60c17 0 31 13 33 29h39c18 0 32 15 32 33v20c0 7-5 12-11 12H12C5 94 0 88 0 82V62c0-18 15-33 32-33zm63 0h79c-2-3-5-6-9-6h-60c-4 0-8 3-10 6zm142 24H32c-5 0-9 4-9 9v8h223v-8c0-5-4-9-9-9z"
			></path>
			<path
				fill={isHovered ? "#929AAB" : "#FFFFFF"}
				fillRule="nonzero"
				d="M68 164c-1-6 3-12 10-13 6-1 12 4 13 10l17 120c1 6-4 12-10 13-7 1-13-3-13-10L68 164zm111-3c1-6 6-11 13-10 6 1 11 7 10 13l-17 120c-1 7-7 11-13 10-7-1-11-7-10-13l17-120zm-55-1c0-6 5-11 12-11 6 0 12 5 12 11v123c0 6-6 11-12 11-7 0-12-5-12-11V160z"
			></path>
		</svg>
	);
};

export default IconTrash;
