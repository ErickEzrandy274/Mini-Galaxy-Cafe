import React, { useState } from "react";
import ProductCard from "../../elements/Card/ProductCard";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import { LandingPageProps } from "./interface";
import { FavContextProvider } from "../../../context/FavContext";
import { useSelector } from "react-redux";
import { BuyerProduct } from "../../elements/Card/interface";
import ModalButton from "../../elements/Button/CheckOutButton";
import { motion } from "framer-motion";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";
import { pageTransition } from "../../utils/animation/PageTransitionAnimation";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const productList: BuyerProduct[] = useSelector(
		(state: any) => state.buyerProduct.productList
	);

	const { initial, animate, transition } = pageTransition;
	const {
		initial: titleInitial,
		animate: titleAnimate,
		exit: titleExit,
		transition: titleTransition,
	} = menutitleAnimation;

	return (
		<FavContextProvider>
			<motion.div
				initial={initial}
				animate={animate}
				exit={initial}
				transition={{transition}}
				className="flex flex-col md:flex-row mx-auto md:mx-10 gap-5 md:gap-0 font-semibold">
				<motion.h2
					initial={titleInitial}
					animate={titleAnimate}
					exit={titleExit}
					transition={titleTransition}
					className="hidden sm:block text-white text-6xl mx-auto md:text-right tracking-wider md:w-2/3">
					<p>Our {type}...</p>
				</motion.h2>

				<motion.h2
					initial={titleInitial}
					animate={titleAnimate}
					exit={titleExit}
					transition={titleTransition}
					className="sm:hidden text-center text-white text-5xl mx-auto tracking-wider">
					<p>Our</p>
					<p>{type}...</p>
				</motion.h2>

				<div className="flex flex-col justify-center items-center md:items-center md:w-1/3">
					<ModalButton
						to="Checkout"
						onClick={() => setIsModalOpen(true)}
						productList={productList}
						type={type}
					/>

					{isModalOpen && (
						<CheckOutModal
							type="Checkout"
							setIsModalOpen={setIsModalOpen}
							productList={productList}
						/>
					)}
				</div>
			</motion.div>
			
			<div className="flex flex-wrap m-5">
				{data.map((item: any, index: number) => {
					return (
						<ProductCard
							key={type + "-" + item.dataId}
							{...item}
							index={index}
							type={type}
						/>
					);
				})}
			</div>
		</FavContextProvider>
	);
};

export default ProductPage;
