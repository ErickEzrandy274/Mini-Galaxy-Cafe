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
			<div className="flex flex-col md:flex-row mx-10 gap-5 md:gap-0">
				<div className="md:hidden flex flex-col justify-center items-center">
					<CheckOutButton onClick={() => setIsModalOpen(true)} />
					{isModalOpen && (
						<CheckOutModal setIsModalOpen={setIsModalOpen} />
					)}
				</div>

				<h2 className="text-white text-5xl lg:text-6xl mx-auto md:text-right tracking-wider font-semibold md:w-2/3">
					Our {type}...
				</h2>
				
				<div className="hidden md:flex flex-col justify-center items-end w-1/3">
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
