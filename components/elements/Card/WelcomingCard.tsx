import React from "react";
import { useRouter } from "next/router";
import { WelcomingCardProps, OptimizedImage, IconRightArrow } from "@elements";
import { motion } from "framer-motion";
import { menutitleAnimation } from "@utils";

const WelcomingCard: React.FC<WelcomingCardProps> = ({
	name,
	image,
	href,
	delay,
}) => {
	const { push } = useRouter();
	const { initial, animate, exit, transition } = menutitleAnimation;

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
			<OptimizedImage name={name} image={image} welcoming />

			<div className="p-5">
				<motion.h5
					initial={initial}
					animate={animate}
					exit={exit}
					transition={{
						...transition,
						delay: 0.3 + 0.3 * delay,
					}}
					className="mb-4 text-2xl font-bold text-white"
				>
					{name}
				</motion.h5>

				<motion.div
					initial={initial}
					animate={animate}
					exit={exit}
					transition={{
						...transition,
						delay: 0.4 + 0.3 * delay,
					}}
				>
					<button
						onClick={() => push(href)}
						className="inline-flex items-center gap-1 py-2 px-3 text-sm font-medium text-center text-white shadow-lg
                        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:outline-none 
                        focus:ring-blue-500 focus:ring-offset-blue-200 transition-all duration-200 ease-in hover:scale-110"
					>
						See more
						<IconRightArrow />
					</button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default WelcomingCard;
