import React, { useMemo } from "react";
import { TooltipProps } from "./interface";
import { motion } from "framer-motion";
import { menutitleAnimation } from "@utils";

const InfoTooltip: React.FC<TooltipProps> = ({
	productList: { length },
	type,
}) => {
	const { initial, animate, exit, transition } = menutitleAnimation;
	const info: string = useMemo(() => {
		return length > 0
			? `Finish your order!`
			: `Buy our ${
					type !== "Others" ? type.slice(0, -1).toLowerCase() : `dish`
			  } to enable this button!`;
	}, [length, type]);

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ ...transition, delay: 1.25 }}
			className="tooltip tooltip-bottom tooltip-open tooltip-info"
			data-tip={info}
		></motion.div>
	);
};

export default InfoTooltip;
