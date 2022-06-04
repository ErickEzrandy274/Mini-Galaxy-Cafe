import React from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "./interface";

const FoodPage: React.FC<LandingPageProps> = ({ data }) => {
	return (
		<>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Our Foods...</div>
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
		</>
	);
};

export default FoodPage;
