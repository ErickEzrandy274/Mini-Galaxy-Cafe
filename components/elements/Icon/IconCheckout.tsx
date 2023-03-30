import React from "react";
import { BaseIconProps } from "./interface";
import { BuyerProduct } from "@elements";
import { useProductListSelector } from "@reduxs";

const IconCheckout: React.FC<BaseIconProps> = ({ width = 25, height = 25 }) => {
	const productList: BuyerProduct[] = useProductListSelector();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={width}
			height={height}
		>
			<path
				fill={productList.length ? "#FFFFFF" : "#000000"}
				d="M19 8l-5-5-1 1 4 4H7l4-4-1-1-5 5H1v2h1.5L4 21h16l1.5-11H23V8h-4zM9 18H7v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6z"
			></path>
		</svg>
	);
};

export default IconCheckout;
