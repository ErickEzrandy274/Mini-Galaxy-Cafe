import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../context/AuthContext";
import { deleteBuyerProduct } from "../../utils/function/dataManipulation";
import { CheckOutProps } from "./interface";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animation/PageTransitionAnimation";
import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";
import { priceInfoConstant } from "../../elements/PriceInfo/constant";
import { useUserStuff } from "../../../context/UserStuffContext";
import { reset_product } from "../../../redux/dataBuyer/dataBuyerSlice";
import LoadingInfo from "../../elements/Loader/LoadingInfo";
import ModalWrapper from "../../elements/Modal/ModalWrapper";
import CheckoutTable from "../../elements/Table/CheckoutTable";
import PriceInfo from "../../elements/PriceInfo";
import BlankContentInfo from "../../elements/BlankContentInfo";

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
	let newData: any[] = data;
	const [isPayed, setIsPayed] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();

	const handlePayment = async () => {
		setIsLoading(true);
		newData = [];
		setIsPayed(true);
		await deleteBuyerProduct(uid);
		dispatch(reset_product());
		setUserStuff([]);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
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
				{newData?.length > 0 && !isPayed ? (
					<>
						<motion.h1
							initial={secInit}
							animate={secAnim}
							exit={secExit}
							transition={{ ...secTrans, delay: 0.15 }}
							className="font-semibold text-4xl text-center sm:text-left"
						>
							Your Cart
						</motion.h1>

						<div className="rounded-md shadow-md">
							<CheckoutTable products={newData} />
						</div>

						<div
							className={`w-full flex flex-col items-center sm:items-end space-y-4 p-2 text-white font-semibold`}
						>
							{priceInfoConstant?.map((item: string, index: number) => {
								return (
									<PriceInfo
										title={item}
										data={data}
										key={"PriceInfo-" + item}
										index={index}
									/>
								);
							})}

							<ModalWrapper
								to="Payment"
								modalType="Payment"
								modalBtnType="Others"
								productList={data}
								handlePayment={handlePayment}
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
