/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageWrapperProps } from "./interface";

const ImageWrapper: React.FC<ImageWrapperProps> = ({
	images,
	version,
	customClassDesktop,
}) => {
	return (
		<div
			className={
				version === "mobile"
					? `flex sm:hidden`
					: `hidden sm:flex w-1/2 lg:w-3/5 relative`
			}
		>
			{images.map((item: string, index: number) => {
				return (
					<div
						className={
							version === "mobile"
								? `w-1/2`
								: `hidden ${
										index === 0 ? `lg:block` : `sm:block`
								  }`
						}
						key={"image-" + index}
					>
						<img
							src={item}
							alt={item.substring(1, item.length - 4)}
							className={
								version === "mobile"
									? `h-[100%]`
									: customClassDesktop![index]
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImageWrapper;
