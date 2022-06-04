import React from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "./interface";

const FoodPage: React.FC<LandingPageProps> = ({ data }) => {
	return (
		<div className="flex flex-wrap m-5">
			{data.map((item: any, index: number) => {
				return (
					<ProductCard
						key={"food-" + index}
						name={item.pk}
						harga={item.fields.price}
						image={item.fields.image}
						index={index}
					/>
				);
			})}
		</div> 
	);
};

export default FoodPage;
