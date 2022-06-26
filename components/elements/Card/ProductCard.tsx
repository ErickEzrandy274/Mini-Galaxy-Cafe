import React, { useState } from "react";
import CheckOutButton from "../Button/CheckOutButton";
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
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	return (
		<div className="cursor-default w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto">
			<div className="card card-compact bg-base-100 shadow-xl">
				<OptimizedImage image={image} index={index} />

				<div className="card-body text-white tracking-wide">
					<h2 className="card-title font-semibold">{name}</h2>
					<p className="text-lg">Rp {price}</p>
					<div className="card-actions justify-end">
						{isModifierButtonOpen ? (
							<>
								<ModifierButton
									setIsModifierButtonOpen={
										setIsModifierButtonOpen
									}
								/>
								<CheckOutButton onClick={() => setIsModalOpen(true)} />
								{isModalOpen && <CheckOutModal setIsModalOpen={setIsModalOpen} />}
							</>
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
