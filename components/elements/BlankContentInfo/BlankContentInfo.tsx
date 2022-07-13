import React from "react";
import { motion } from "framer-motion";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";
import { BlankContentInfoProps } from "./interface";

const BlankContentInfo: React.FC<BlankContentInfoProps> = ({
	firstContent,
	secondContent,
	delay,
}) => {
	const { initial, animate, exit, transition } = menutitleAnimation;

	return (
		<>
			<motion.h2
				initial={initial}
				animate={animate}
				exit={exit}
				transition={{ ...transition, delay }}
			>
				{firstContent}
            </motion.h2>
            
			<motion.p
				initial={initial}
				animate={animate}
				exit={exit}
				transition={{ ...transition, delay: delay + 0.25 }}
				className="text-3xl sm:text-4xl lg:text-5xl"
			>
				{secondContent}
			</motion.p>
		</>
	);
};

export default BlankContentInfo;
