import React from "react";
import { WelcomingCardProps } from "../../elements/Card/interface";
import WelcomingCard from "../../elements/Card/WelcomingCard";
import { WelcomingCardData } from "./data";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animation/PageTransition";

const MenuPage = () => {
    const { initial, animate, transition } = pageTransition;
    
	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={initial}
			transition={transition}
			className="flex flex-col gap-3"
		>
			<div className="text-white text-center text-4xl sm:text-5xl lg:text-6xl tracking-wider">
				Please Choose Our Menus...
			</div>
			<div className="flex lg:flex-row flex-col gap-8 justify-center items-center">
				{WelcomingCardData.map(
					(item: WelcomingCardProps, index: number) => {
						return (
							<WelcomingCard
								key={"welcomingCard-" + index}
								{...item}
							/>
						);
					}
				)}
			</div>
		</motion.div>
	);
};

export default MenuPage;
