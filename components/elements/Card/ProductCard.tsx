import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_product } from "../../../store/actions/action";
import { INITIAL_NUM } from "../Button/constants";
import FavButton from "../Button/FavButton";
import ModifierButton from "../Button/ModifierButton";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import { BuyerProduct, ProductCardProps } from "./interface";

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	price,
	image,
	dataId,
	index,
	type,
}) => {
	const [isModifierButtonOpen, setIsModifierButtonOpen] = useState<boolean>(false);
	const [removed, setRemoved] = useState<boolean>(false);
	const dispatch = useDispatch();
	const productList: BuyerProduct[] = useSelector((state: any) => state.buyerProduct.productList)
	const indexProduct = productList.findIndex((item: BuyerProduct) => item.dataId === dataId)

	const cardProps = {
		name,
		price,
		image,
		type,
		dataId,
	};

	const handleClick = () => {
		const product: ProductCardProps = { ...cardProps, index };
		dispatch(add_product(product, INITIAL_NUM));
		setIsModifierButtonOpen(true);
	};

	return (
		<div
			className={`cursor-default w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto ${
				removed && "hidden"
			}`}
		>
			<div className="card card-compact bg-base-100 shadow-xl">
				<OptimizedImage image={image} index={index} />

				<div className="card-body text-white tracking-wide">
					<h2 className="card-title font-semibold">{name}</h2>
					<div className="flex justify-between pb-2">
						<p className="text-lg">Rp {price}</p>
						<FavButton
							setRemoved={setRemoved}
							cardProps={cardProps}
						/>
					</div>
					<div className="card-actions items-center justify-end">
						{isModifierButtonOpen || indexProduct !== -1 ? (
							<ModifierButton
								setIsModifierButtonOpen={
									setIsModifierButtonOpen
								}
								{...cardProps}
								index={index}
								amount={productList[indexProduct].amount}
							/>
						) : (
							<button
								onClick={handleClick}
								className="btn text-base sm:text-lg btn-primary shadow-xl text-base-200 hover:text-white"
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
