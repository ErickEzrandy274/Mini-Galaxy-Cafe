import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	BlankContentInfo,
	BuyerProduct,
	ModalWrapper,
	ProductCard,
} from "@elements";
import { menutitleAnimation, useAuth, useFavContext } from "@utils";
import { useProductListSelector } from "@reduxs";

const FavoriteWrapper = ({ data }: any) => {
	const { favDataSize } = useFavContext();
	const [isEmpty, setIsEmpty] = useState(!!favDataSize);
	const productList: BuyerProduct[] = useProductListSelector();

	useEffect(() => {
		setIsEmpty(!(favDataSize > 0));
	}, [favDataSize]);

	const isThereData = !!data?.length;
	const {
		user: { displayName },
	} = useAuth();
	const { initial, animate, exit, transition } = menutitleAnimation;

	return (
		<>
			<section className="flex flex-col md:flex-row mx-10 gap-5 md:gap-0 font-semibold">
				<motion.h2
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className={`hidden sm:block text-white text-5xl lg:text-6xl mx-auto tracking-wider font-semibold 
					${!isThereData ? `w-full text-center` : `md:w-2/3 md:text-right`}`}
				>
					{displayName} Favorites...
				</motion.h2>

				<motion.h2
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className="sm:hidden text-white text-center text-4xl mx-auto tracking-wider font-semibold"
				>
					<p>{displayName}</p>
					<p>Favorites...</p>
				</motion.h2>

				{isThereData && (
					<ModalWrapper
						to="Checkout"
						productList={productList}
						modalType="Checkout"
						modalBtnType="Others"
					/>
				)}
			</section>

			{isEmpty ? (
				<section className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10">
					<BlankContentInfo
						firstContent="No favorites product"
						secondContent="Select it first!"
						delay={0.75}
					/>
				</section>
			) : (
				<section className="flex flex-wrap m-5">
					{data?.map((item: any, index: number) => {
						return (
							<ProductCard
								key={item.type + "-" + item.dataId}
								{...item}
								index={index}
								type={item.type}
							/>
						);
					})}
				</section>
			)}
		</>
	);
};

export default FavoriteWrapper;
