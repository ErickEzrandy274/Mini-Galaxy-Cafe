import React, { useEffect, useState } from "react";
import { useAuth, useFavContext } from "../../../context";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { selectProductList } from "../../../redux/dataBuyer/dataBuyerSlice";
import {
	BlankContentInfo,
	BuyerProduct,
	ModalWrapper,
	ProductCard,
} from "../../elements";
import { menutitleAnimation } from "../../utils/animation";

const FavoriteWrapper = ({ data }: any) => {
	const productList: BuyerProduct[] = useSelector(selectProductList);

	const { favDataSize } = useFavContext();
	const [isEmpty, setIsEmpty] = useState(!!favDataSize);

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
			<div className="flex flex-col md:flex-row mx-10 gap-5 md:gap-0 font-semibold">
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
			</div>

			{isEmpty ? (
				<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10">
					<BlankContentInfo
						firstContent="No favorites product"
						secondContent="Select it first!"
						delay={0.75}
					/>
				</div>
			) : (
				<div className="flex flex-wrap m-5">
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
				</div>
			)}
		</>
	);
};

export default FavoriteWrapper;
