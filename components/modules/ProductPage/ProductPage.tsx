import React, { useState } from "react";
import CheckOutButton from "../../elements/Button/CheckOutButton";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import { LandingPageProps } from "./interface";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<>
			<div className="flex mx-10">
				<h2 className="text-white text-5xl lg:text-6xl text-right tracking-wider font-semibold w-2/3">
					Our {type}...
				</h2>
				<div className="flex flex-col justify-center items-end w-1/3">
					<CheckOutButton onClick={() => setIsModalOpen(true)} />
					{isModalOpen && (
						<CheckOutModal setIsModalOpen={setIsModalOpen} />
					)}
				</div>
			</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					return (
						<ProductCard key={type + "-" + item.dataId} {...item} />
					);
				})}
			</div>
		</>
	);
};

export default ProductPage;
