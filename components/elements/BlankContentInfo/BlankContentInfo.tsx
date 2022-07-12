import React from "react";
import { motion } from "framer-motion";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";
import { BlankContentInfoProps } from "./interface";

const BlankContentInfo: React.FC<BlankContentInfoProps> = ({
	firstContent,
	secondContent,
}) => {
	const { initial, animate, exit, transition } = menutitleAnimation;

	return (
		<>
			<motion.h2
				initial={initial}
				animate={animate}
				exit={exit}
				transition={{ ...transition, delay: 0.75 }}
			>
				{firstContent}
			</motion.h2>

			<motion.p
				initial={initial}
				animate={animate}
				exit={exit}
				transition={{ ...transition, delay: 1 }}
			>
				{secondContent}
			</motion.p>
		</>
	);
};

export default BlankContentInfo;
