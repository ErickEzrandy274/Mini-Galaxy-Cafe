import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth, useUserStuff } from "@context";
import { CheckOutProps, DataType } from "./interface";
import { motion } from "framer-motion";
import { reset_product, selectProductList } from "@reduxs";
import {
	BlankContentInfo,
	BuyerProduct,
	CheckoutTable,
	LoadingInfo,
	ModalWrapper,
	PriceInfo,
	PriceInfoConstant,
} from "@elements";
import { deleteBuyerProduct, menutitleAnimation, pageTransition } from "@utils";

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
	// let newData: DataType = data;
	const productList: BuyerProduct[] = useSelector(selectProductList);
	const [isPayed, setIsPayed] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [newData, setNewData] = useState<DataType>(data);
	const dispatch = useDispatch();

	const handlePayment = async () => {
		setIsLoading(true);
		setNewData([]);
		setIsPayed(true);
		await deleteBuyerProduct(uid);
		dispatch(reset_product());
		setUserStuff([]);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	};

	const handleCancelOrder = async () => {
		await deleteBuyerProduct(uid);
		dispatch(reset_product());
		setUserStuff([]);
	};

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			className="mx-4 sm:mx-10"
		>
			<div className="bg-gray-100/10 flex flex-col gap-5 p-4 sm:p-10 rounded-lg">
				{productList?.length > 0 && !isPayed ? (
					<>
						<div className="flex justify-between">
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
						</div>

						<div className="rounded-md shadow-md">
							<CheckoutTable
								products={newData}
								newData={newData}
								setNewData={setNewData}
							/>
						</div>

						<div
							className={`w-full flex flex-col items-center sm:items-end space-y-4 p-2 text-white font-semibold`}
						>
							{PriceInfoConstant?.map((item: string, index: number) => {
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
						</div>
					</>
				) : (
					<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10 relative">
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
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default CheckOut;
