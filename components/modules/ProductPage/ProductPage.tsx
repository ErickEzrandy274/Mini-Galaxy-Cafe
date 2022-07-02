import React, { useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import { LandingPageProps } from "./interface";
import { FavContextProvider } from "../../../context/FavContext";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<FavContextProvider>
			<div className="text-white text-center text-5xl lg:text-6xl tracking-wider font-semibold">Our {type}...</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					return <ProductCard key={type + "-" + item.dataId} {...item} type={type} />;
				})}
			</div>
		</FavContextProvider>
	);
};

export default ProductPage;
