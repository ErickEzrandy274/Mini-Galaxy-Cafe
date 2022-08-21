import React from "react";
import { TooltipProps } from "./interface";
import { motion } from "framer-motion";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";

const InfoTooltip: React.FC<TooltipProps> = ({ productList, type }) => {
	const { initial, animate, exit, transition } = menutitleAnimation;
	const info: string =
		productList.length > 0
			? `Finish your order!`
			: `Buy our ${
					type !== "Others" ? type.slice(0, -1).toLowerCase() : `dish`
			  } to enable this button!`;

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
