import React, { useState } from "react";
import { usePathContext } from "../../../context/PathContext";
import CheckOutButton from "../Button/CheckOutButton";
import FavButton from "../Button/FavButton";
import ModifierButton from "../Button/ModifierButton";
import CheckOutModal from "../Modal/CheckOutModal";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	price,
	image,
	index,
}) => {
	const [isModifierButtonOpen, setIsModifierButtonOpen] =
		useState<boolean>(false);

	return (
		<div className="cursor-default w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto">
			<div className="card card-compact bg-base-100 shadow-xl">
				<OptimizedImage image={image} index={index} />

				<div className="card-body text-white tracking-wide">
					<h2 className="card-title font-semibold">{name}</h2>
					<div className="flex justify-between pb-2">
						<p className="text-lg">Rp {price}</p>
						<FavButton cardProps={cardProps} />
					</div>
					<div className="card-actions items-center justify-end">
						{isModifierButtonOpen ? (
<<<<<<< HEAD
							<>
								<ModifierButton setIsModifierButtonOpen={setIsModifierButtonOpen} />
								<CheckOutButton onClick={() => setIsModalOpen(true)} />
								{isModalOpen && <CheckOutModal setIsModalOpen={setIsModalOpen} />}
							</>
=======
							<ModifierButton
								setIsModifierButtonOpen={
									setIsModifierButtonOpen
								}
							/>
>>>>>>> 5a4ad1130eb6633f0887be154833551a270995cb
						) : (
							<button
								onClick={() => setIsModifierButtonOpen(true)}
								className="btn text-base sm:text-lg btn-primary shadow-xl"
							>
								Buy Now
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
