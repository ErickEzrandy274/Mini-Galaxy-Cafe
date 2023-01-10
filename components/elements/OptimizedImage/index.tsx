import React from "react";
import { OptimizedImageProps } from "./interface";
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
			className={welcoming ? "rounded-t-xl" : "rounded-lg"}
		/>
	);
};

export default OptimizedImage;
