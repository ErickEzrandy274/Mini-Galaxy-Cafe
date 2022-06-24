import React from "react";
import ProductCard from "../../elements/Card/ProductCard";
import { LandingPageProps } from "./interface";
import { v4 as uuidv4  } from 'uuid';

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	return (
		<>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Our {type}...</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					const index = uuidv4()
					return (
						<ProductCard
							key={type + '-' + index}
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

export default ProductPage;
