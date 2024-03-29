import React from "react";
import { BaseIconProps } from "@elements";

const IconCheckmark: React.FC<BaseIconProps> = ({
	width = 30,
	height = 30,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={width}
			height={height}
		>
			<g data-name="Layer 2">
				<g data-name="checkmark-circle-2">
					<path
						fill="#FFFFFF"
						d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
					></path>
					<path
						fill="#FFFFFF"
						d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 00-1.58 1.23l2.43 3.11a1 1 0 00.79.38 1 1 0 00.79-.39l4.57-6a1 1 0 10-1.6-1.22z"
					></path>
				</g>
			</g>
		</svg>
	);
};

export default IconCheckmark;
