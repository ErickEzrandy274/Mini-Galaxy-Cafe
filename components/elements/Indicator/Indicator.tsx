import React from "react";
import { IndicatorProps } from "./interface";

const Indicator: React.FC<IndicatorProps> = ({
	children,
	className,
	infoIndicator,
}) => {
	return (
		<div className="indicator">
			<span
				className={`indicator-item badge ${className} font-semibold tracking-wide`}
			>
				{infoIndicator}
			</span>

			{children}
		</div>
	);
};

export default Indicator;
