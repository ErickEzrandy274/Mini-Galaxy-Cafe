import { useRouter } from "next/router";
import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { WelcomingCardProps } from "./interface";
import { motion } from "framer-motion";
import {
	buttonMenuAnimation,
	menuNameAnimation,
	menutitleAnimation,
} from "../../utils/animation/MenuPageAnimation";

const WelcomingCard: React.FC<WelcomingCardProps> = ({
	name,
	image,
	href,
	index,
	delay,
}) => {
	console.log(delay);
	const { push } = useRouter();
	const { initial, animate, exit, transition } = menutitleAnimation;
	const { initial: menuInit, exit: menuExit } = menuNameAnimation;
	const {
		initial: btnInit,
		animate: btnAnim,
		exit: btnExit,
		transition: btnTrans,
	} = buttonMenuAnimation;

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{
				...transition,
				delay: 0.2 + 0.2 * delay,
			}}
			className="w-3/5 sm:w-2/5 lg:w-1/4 xl:w-1/5 text-center rounded-xl border sm:my-3 sm:mb-10
            shadow-lg bg-gray-800 border-gray-700 cursor-default"
		>
			<OptimizedImage image={image} index={index} welcoming={true} />

			<div className="p-5">
				<motion.h5
					initial={menuInit}
					animate={btnAnim}
					exit={menuExit}
					transition={{
						...btnTrans,
						delay: 0.2 + 0.2 * delay,
					}}
					className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{name}
				</motion.h5>

				<motion.div
					initial={btnInit}
					animate={btnAnim}
					exit={btnExit}
					transition={{
						...btnTrans,
						delay: 0.3 + 0.3 * delay,
					}}
				>
					<button
						onClick={() => push(href)}
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white shadow-lg
                        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:outline-none 
                        focus:ring-blue-500 focus:ring-offset-blue-200 transition duration-200 ease-in hover:scale-110"
					>
						See more
						<svg
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default WelcomingCard;
