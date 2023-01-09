import React from "react";
import { OptimizedImageProps } from "./interface";
import Image from "next/image";

const OptimizedImage: React.FC<OptimizedImageProps> = ({
	image,
	index,
	welcoming,
}) => {
	return (
		<Image
			src={image}
			alt={"Foods-" + index}
			width={500}
			height={400}
			objectFit="cover"
			loading="eager"
			className={welcoming ? `rounded-t-xl` : `rounded-lg`}
		/>
	);
};

export default OptimizedImage;
