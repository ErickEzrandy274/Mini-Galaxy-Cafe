// reference for blur image: https://stackoverflow.com/a/69250346
import React from "react";
import { OptimizedImageProps } from "./interface";
import { convertImage, toBase64 } from "@utils";
import Image from "next/image";

const OptimizedImage: React.FC<OptimizedImageProps> = ({
	name,
	image,
	welcoming = false,
}) => {
	return (
		<Image
			src={image}
			alt={name}
			width={500}
			height={400}
			objectFit="cover"
			loading="lazy"
			placeholder="blur"
			blurDataURL={`data:image/svg+xml;base64,${toBase64(
				convertImage(500, 400)
			)}`}
			className={welcoming ? "rounded-t-xl" : "rounded-lg"}
		/>
	);
};

export default OptimizedImage;
