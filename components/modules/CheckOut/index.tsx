import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CheckOutProps, DataType } from "./interface";
import { motion } from "framer-motion";
import {
	BlankContentInfo,
	BuyerProduct,
	CheckoutTable,
	LoadingInfo,
	ModalWrapper,
	PriceInfo,
	PriceInfoConstant,
} from "@elements";
import {
	deleteBuyerProduct,
	menutitleAnimation,
	pageTransition,
	resetProduct,
	useAuth,
	useProductListSelector,
	useUserStuff,
} from "@utils";

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
	const {
		user: { uid },
	} = useAuth();
	const { setUserStuff } = useUserStuff();
	const { initial, animate, exit, transition } = pageTransition;
	const {
		initial: secInit,
		animate: secAnim,
		exit: secExit,
		transition: secTrans,
	} = menutitleAnimation;
	const productList: BuyerProduct[] = useProductListSelector();
	const [isPayed, setIsPayed] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [newData, setNewData] = useState<DataType>(data);
	const dispatch = useDispatch();

	const handlePayment = async () => {
		setIsLoading(true);
		setNewData([]);
		setIsPayed(true);
		await deleteBuyerProduct(uid);
		dispatch(resetProduct());
		setUserStuff([]);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	};

	const handleCancelOrder = async () => {
		await deleteBuyerProduct(uid);
		dispatch(resetProduct());
		setUserStuff([]);
	};

	return (
		<motion.section
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			className="mx-4 sm:mx-10"
		>
			<section className="bg-gray-100/10 flex flex-col gap-5 p-4 py-8 sm:p-10 rounded-lg">
				{productList?.length > 0 && !isPayed ? (
					<>
						<article className="flex flex-col sm:flex-row gap-3 justify-between">
							<motion.h1
								initial={secInit}
								animate={secAnim}
								exit={secExit}
								transition={{ ...secTrans, delay: 0.15 }}
								className="font-semibold text-4xl text-center sm:text-left"
							>
								Your Cart
							</motion.h1>

							<ModalWrapper
								to="Cancel Order"
								modalType="Cancel Order"
								modalBtnType="Others"
								productList={productList}
								handleAction={handleCancelOrder}
							/>
						</article>

						<section className="rounded-md shadow-md overflow-x-auto">
							<CheckoutTable
								products={newData}
								newData={newData}
								setNewData={setNewData}
							/>
						</section>

						<section
							className={`w-full flex flex-col items-center sm:items-end space-y-4 p-2 text-white font-semibold`}
						>
							{PriceInfoConstant.map((item: string, index: number) => {
								return (
									<PriceInfo
										title={item}
										data={productList}
										key={"PriceInfo-" + item}
										index={index}
									/>
								);
							})}

							<ModalWrapper
								to="Payment"
								modalType="Payment"
								modalBtnType="Others"
								productList={productList}
								handleAction={handlePayment}
							/>
						</section>
					</>
				) : (
					<section className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10 relative">
						{isLoading ? (
							<LoadingInfo info="Our system is serving payment for your order" />
						) : isPayed ? (
							<BlankContentInfo
								firstContent="Thank you for buying our dish"
								secondContent="Enjoy your dish 😁😁😁"
								delay={0.5}
							/>
						) : (
							<BlankContentInfo
								firstContent="No products in your cart"
								secondContent="Order it first!"
								delay={0.75}
							/>
						)}
					</section>
				)}
			</section>
		</motion.section>
	);
};

export default CheckOut;
