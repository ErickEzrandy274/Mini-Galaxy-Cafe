import { useRouter } from "next/router";
import React from "react";
import ImageWrapper from "../../elements/ImageLanding/ImageWrapper";
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
	const type: string = href.substring(1);
	const { push } = useRouter();

	return (
		<div className="flex flex-col sm:flex-row gap-5 items-center">
			{type !== "beverage" && (
				<ImageWrapper
					images={images}
					version="desktop"
					customClassDesktop={customClassDesktopNotBeverages}
				/>
			)}

			<ImageWrapper images={images} version="mobile" />

			<div
				className={`flex flex-col items-center sm:items-start font-semibold ${
					type !== "beverage" && `md:items-end md:text-right`
				} gap-3 px-5 sm:px-3 sm:w-1/2 lg:w-2/5`}
			>
				<h2 className="font-bold text-4xl lg:text-5xl text-white leading-tight">
					{title}
				</h2>
				<span>{content}</span>
				<div>
					<button
						className="btn btn-outline btn-info rounded-full focus:ring focus:ring-offset-2 focus:outline-none 
                        focus:ring-[#3ABFF8] focus:ring-offset-gray-100 transition duration-200 ease-in"
						onClick={() => push(href)}
					>
						{linkName}
					</button>
				</div>
			</div>

			{type === "beverage" && (
				<ImageWrapper
					images={images}
					version="desktop"
					customClassDesktop={customClassDesktopBeverages}
				/>
			)}
		</div>
	);
};

export default TemplateLanding;
