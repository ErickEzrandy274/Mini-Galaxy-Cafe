import React from "react";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import { WelcomingCardData } from "./data";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animation/PageTransitionAnimation";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";

const MenuPage = () => {
	const { initial, animate, transition } = pageTransition;
	const {
		initial: titleInitial,
		animate: titleAnimate,
		exit: titleExit,
		transition: titleTransition,
	} = menutitleAnimation;

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={initial}
			transition={transition}
			className="flex flex-col gap-3"
		>
			<motion.div
				initial={titleInitial}
				animate={titleAnimate}
				exit={titleExit}
				transition={titleTransition}
				className="text-white text-center text-4xl sm:text-5xl lg:text-6xl tracking-wider"
			>
				Please Choose Our Menus...
			</motion.div>

			<div className="flex lg:flex-row flex-col gap-8 justify-center items-center">
				{WelcomingCardData.map(
					(item: any, index: number) => {
						return (
							<WelcomingCard
								key={"welcomingCard-" + index}
								{...item}
								delay={index}
							/>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default MenuPage;
