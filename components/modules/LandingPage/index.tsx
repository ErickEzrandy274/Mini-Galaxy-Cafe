import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { dataLanding } from "./dataLanding";
import { TemplateLandingProps } from "./interface";
import TemplateLanding from "./TemplateLanding";
import {
	buttonVariant,
	contentVariant,
	pageTransition,
	titleVariant,
} from "@utils";

const LandingPage = () => {
	const { initial, animate, exit, transition } = pageTransition;
	const { push } = useRouter();
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		control.start(inView ? "visible" : "hidden");
	}, [control, inView]);

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			className="bg-[url('/rest-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
		>
			<div className="flex flex-col gap-14 sm:gap-24 px-5 sm:px-12 lg:px-20 relative z-10 py-32 xl:py-40">
				<motion.div
					ref={ref}
					className="lg:w-3/5 xl:w-2/5 flex flex-col gap-3 items-start relative z-10"
				>
					<motion.h1
						variants={titleVariant}
						custom={"beverage"}
						initial="hidden"
						animate={control}
						className="font-bold text-6xl lg:text-7xl text-white leading-tight sm:mt-4"
					>
						Mini Galaxy Cafe
						<span className="text-sm">est. 2022</span>
					</motion.h1>

					<motion.span
						variants={contentVariant}
						custom={"beverage"}
						initial="hidden"
						animate={control}
						className="text-lg font-semibold text-gray-300/90"
					>
						This cafe is not only designed as a hangout place, but can also be a
						kind of co-working space that is quite interesting and comfortable.
						Creative work processes can also be born from the interior of a
						small cafe like this
					</motion.span>

					<motion.div
						variants={buttonVariant}
						custom={"beverage"}
						initial="hidden"
						animate={control}
					>
						<button
							className="btn btn-outline btn-info rounded-full focus:ring focus:ring-offset-2 focus:outline-none 
                        focus:ring-[#3ABFF8] focus:ring-offset-gray-100 transition duration-200 ease-in hover:scale-110"
							onClick={() => push("/menu")}
						>
							Go to Menu
						</button>
					</motion.div>
				</motion.div>

				{dataLanding.map((item: TemplateLandingProps, index: number) => {
					return <TemplateLanding {...item} key={"TemplateLanding-" + index} />;
				})}
			</div>
		</motion.div>
	);
};

export default LandingPage;
