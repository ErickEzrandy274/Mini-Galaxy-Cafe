import React, { useMemo } from "react";
import { LandingPageProps } from "./interface";
import { motion } from "framer-motion";
import {
	FavContextProvider,
	menutitleAnimation,
	useProductListSelector,
} from "@utils";
import { BuyerProduct, ModalWrapper, ProductCard } from "@elements";

const ProductPage: React.FC<LandingPageProps> = ({ data, type }) => {
	const productList: BuyerProduct[] = useProductListSelector();

	const {
		initial: titleInitial,
		animate: titleAnimate,
		exit: titleExit,
		transition: titleTransition,
	} = useMemo(() => menutitleAnimation, []);

	return (
		<FavContextProvider>
			<section className="flex flex-col md:flex-row mx-auto md:mx-10 gap-5 md:gap-0 font-semibold">
				<motion.h2
					initial={titleInitial}
					animate={titleAnimate}
					exit={titleExit}
					transition={titleTransition}
					className="hidden sm:block text-white text-6xl mx-auto md:text-right tracking-wider md:w-2/3"
				>
					<p>Our {type}...</p>
				</motion.h2>

				<motion.h2
					initial={titleInitial}
					animate={titleAnimate}
					exit={titleExit}
					transition={titleTransition}
					className="sm:hidden text-center text-white text-5xl mx-auto tracking-wider"
				>
					<p>Our</p>
					<p>{type}</p>
				</motion.h2>

				<ModalWrapper
					modalBtnType={type}
					productList={productList}
					to="Checkout"
					modalType="Checkout"
				/>
			</section>

			<section className="flex flex-wrap m-5">
				{data?.map((item: any, index: number) => {
					return (
						<ProductCard
							key={type + "-" + item.dataId}
							{...item}
							index={index}
							type={type}
						/>
					);
				})}
			</section>
		</FavContextProvider>
	);
};

export default ProductPage;
