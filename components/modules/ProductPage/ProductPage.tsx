import React from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "./interface";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	return (
		<>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Our {type}...</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					return (
						<ProductCard
							key={type + '-' + item.dataId}
							{...item}
						/>
					);
				})}
			</div> 
		</>
	);
};

export default ProductPage;
