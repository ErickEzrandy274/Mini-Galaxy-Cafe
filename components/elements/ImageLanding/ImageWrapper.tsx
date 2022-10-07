/* eslint-disable @next/next/no-img-element */
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { ImageWrapperProps } from "./interface";

const ImageWrapper: React.FC<ImageWrapperProps> = ({
	type,
	images,
	version,
	customClassDesktop,
}) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const imageVariant = {
		visible: (index: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.75,
				stiffness: 120,
				mass: 2,
				delay: 0.2 * index,
			},
		}),
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		control.start(inView ? "visible" : "hidden");
	}, [control, inView]);

	return (
		<div
			className={
				version === "mobile"
					? `flex sm:hidden`
					: `hidden sm:flex w-1/2 lg:w-3/5 relative`
			}
		>
			{images?.map((item: string, index: number) => {
				const newDelay = index === 0 ? index + 1 : index - 1;

				return (
					<div
						className={
							version === "mobile"
								? `w-1/2`
								: `hidden ${index === 0 ? `lg:block` : `sm:block`}`
						}
						key={"image-" + index}
					>
						<motion.img
							ref={ref}
							variants={imageVariant}
							initial="hidden"
							custom={type === "beverage" ? newDelay : index + 1}
							animate={control}
							src={item}
							alt={item.slice(1, -4)}
							className={
								version === "mobile" ? `h-[100%]` : customClassDesktop![index]
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImageWrapper;
