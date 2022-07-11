import React from "react";
import { TooltipProps } from "./interface";

const InfoTooltip: React.FC<TooltipProps> = ({ productList, type }) => {
	const info: string =
		productList.length > 0
			? `Finish your order!`
			: `Buy our ${
					type
						? type.substring(0, type.length - 1).toLowerCase()
						: `dish`
			} to enable this button!`;
	
	return (
		<div
			className="tooltip tooltip-bottom tooltip-open tooltip-info"
			data-tip={info}
		></div>
	);
};

export default InfoTooltip;
