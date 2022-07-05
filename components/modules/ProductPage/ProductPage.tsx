import React, { useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import { LandingPageProps } from "./interface";
import { FavContextProvider } from "../../../context/FavContext";
import CheckOutButton from "../../elements/Button/CheckOutButton";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<FavContextProvider>
			<div className="flex flex-col md:flex-row mx-auto md:mx-10 gap-5 md:gap-0 font-semibold">
				<h2 className="hidden sm:block text-white text-6xl mx-auto md:text-right tracking-wider md:w-2/3">
					<p>Our {type}...</p>
				</h2>

				<h2 className="sm:hidden text-center text-white text-5xl mx-auto tracking-wider">
					<p>Our</p>
					<p>{type}...</p>
				</h2>

				<div className="flex flex-col justify-center items-center md:items-end md:w-1/3">
					<CheckOutButton onClick={() => setIsModalOpen(true)} />
					{isModalOpen && (
						<CheckOutModal setIsModalOpen={setIsModalOpen} />
					)}
				</div>
			</div>
			<div className="flex flex-wrap m-5">
				{data.map((item: any) => {
					return (
						<ProductCard
							key={type + "-" + item.dataId}
							{...item}
							type={type}
						/>
					);
				})}
			</div>
		</FavContextProvider>
	);
};

export default ProductPage;
