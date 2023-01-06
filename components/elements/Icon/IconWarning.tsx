import React from "react";
import { BaseIconProps } from "./interface";

const IconWarning: React.FC<BaseIconProps> = ({ width = 20, height = 20 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			viewBox="0 0 24 24"
			width={width}
			height={height}
		>
			<path
				fill="#FFFFFF"
				d="M14.876 2.672a3.309 3.309 0 00-5.752 0L.414 18.19a3.178 3.178 0 00.029 3.189A3.264 3.264 0 003.29 23h17.42a3.264 3.264 0 002.847-1.621 3.178 3.178 0 00.029-3.189zM12 19a1 1 0 111-1 1 1 0 01-1 1zm1-5a1 1 0 01-2 0V8a1 1 0 012 0z"
			></path>
		</svg>
	);
};

export default IconWarning;
