import React from "react";
import { IndicatorProps } from "./interface";

const Indicator: React.FC<IndicatorProps> = ({
	children,
	className,
	infoIndicator,
}) => {
	return (
		<section className="indicator">
			<span
				className={`indicator-item badge ${className} font-semibold text-sm tracking-wide text-white`}
			>
				{infoIndicator}
			</span>

			{children}
		</section>
	);
};

export default Indicator;
