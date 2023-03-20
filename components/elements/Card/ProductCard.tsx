import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { handleDataBuyer, selectProductList, ADD_PRODUCT } from "@reduxs";
import {
	BuyerProduct,
	FavButton,
	INITIAL_NUM,
	ModifierButton,
	OptimizedImage,
	ProductCardProps,
} from "@elements";
import { makeRupiahValue, menutitleAnimation } from "@utils";

const ProductCard: React.FC<ProductCardProps> = ({
	name,
	price,
	image,
	dataId,
	index,
	type,
}) => {
	const { initial, animate, exit, transition } = menutitleAnimation;
	const [isModifierButtonOpen, setIsModifierButtonOpen] =
		useState<boolean>(false);
	const [removed, setRemoved] = useState<boolean>(false);
	const dispatch = useDispatch();
	const productList: BuyerProduct[] = useSelector(selectProductList);
	const indexProduct = productList?.findIndex(
		(item: BuyerProduct) => item.dataId === dataId
	);

	const cardProps = {
		name,
		price,
		image,
		type,
		dataId,
	};

	const handleClick = () => {
		const obj: BuyerProduct = { ...cardProps, index, amount: INITIAL_NUM };
		dispatch(handleDataBuyer({ obj, type: ADD_PRODUCT }));
		setIsModifierButtonOpen(true);
	};

	return (
		<motion.section
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ ...transition, delay: 0.25 * (1 + index) }}
			className={`cursor-default w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 sm:pb-5 sm:px-5 mx-auto ${
				removed && "hidden"
			}`}
		>
			<section className="card card-compact bg-base-100 shadow-xl">
				<OptimizedImage name={name} image={image} />

				<article className="card-body text-white tracking-wide">
					<h2 className="card-title font-semibold">{name}</h2>

					<section className="flex justify-between pb-2">
						<p className="text-lg">{makeRupiahValue(price)}</p>
						<FavButton setRemoved={setRemoved} data={cardProps} />
					</section>

					<section className="card-actions items-center justify-end">
						{isModifierButtonOpen || indexProduct !== -1 ? (
							<ModifierButton
								setIsModifierButtonOpen={setIsModifierButtonOpen}
								{...cardProps}
								index={index}
								amount={productList[indexProduct].amount}
							/>
						) : (
							<button
								aria-label="buy now"
								aria-labelledby="buy now"
								onClick={handleClick}
								className="btn text-base sm:text-lg btn-primary shadow-xl text-gray-200 hover:text-white transition-all duration-500 ease-in-out"
							>
								Buy Now
							</button>
						)}
					</section>
				</article>
			</section>
		</motion.section>
	);
};

export default ProductCard;
