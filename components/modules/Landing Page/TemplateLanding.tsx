import { useAnimation, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageWrapper from "../../elements/ImageLanding/ImageWrapper";
import { buttonVariant, contentVariant, titleVariant } from "../../utils/animation/LandingPageAnimation";
import {
	customClassDesktopBeverages,
	customClassDesktopNotBeverages,
} from "./dataLanding";
import { TemplateLandingProps } from "./interface";

const TemplateLanding: React.FC<TemplateLandingProps> = ({
	title,
	content,
	href,
	linkName,
	images,
}) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const type: string = href.substring(1);
	const { push } = useRouter();

	useEffect(() => {
		control.start(inView ? "visible" : "hidden");
	}, [control, inView]);

	return (
		<div className="flex flex-col sm:flex-row gap-5 items-center sm:py-10">
			{type !== "beverage" && (
				<ImageWrapper
					type="other"
					images={images}
					version="desktop"
					customClassDesktop={customClassDesktopNotBeverages}
				/>
			)}

			<ImageWrapper type="other" images={images} version="mobile" />

			<div
				className={`flex flex-col items-center sm:items-start font-semibold ${
					type !== "beverage" && `md:items-end md:text-right`
				} gap-3 px-5 sm:px-3 sm:w-1/2 lg:w-2/5`}
			>
				<motion.h2
					ref={ref}
					variants={titleVariant}
					custom={type}
					initial="hidden"
					animate={control}
					className="font-bold text-4xl lg:text-5xl text-white leading-tight"
				>
					{title}
				</motion.h2>

				<motion.span
					variants={contentVariant}
					custom={type}
					initial="hidden"
					animate={control}
				>
					{content}
				</motion.span>

				<motion.div
					variants={buttonVariant}
					custom={type}
					initial="hidden"
					animate={control}
				>
					<button
						className="btn btn-outline btn-info rounded-full focus:ring focus:ring-offset-2 focus:outline-none 
                        focus:ring-[#3ABFF8] focus:ring-offset-gray-100 transition duration-200 ease-in hover:scale-110"
						onClick={() => push(href)}
					>
						{linkName}
					</button>
				</motion.div>
			</div>

			{type === "beverage" && (
				<ImageWrapper
					type="beverage"
					images={images}
					version="desktop"
					customClassDesktop={customClassDesktopBeverages}
				/>
			)}
		</div>
	);
};

export default TemplateLanding;
