import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../context/AuthContext";
import { reset_product } from "../../../store/actions/action";
import LoadingInfo from "../../elements/Loader/LoadingInfo";
import ModalWrapper from "../../elements/Modal/ModalWrapper";
import CheckoutTable from "../../elements/Table/CheckoutTable";
import { deleteBuyerProduct } from "../../utils/function/dataManipulation";
import { makeRupiahValue } from "../../utils/function/function";
import { CheckOutProps } from "./interface";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animation/PageTransitionAnimation";

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
	const { initial, animate, exit, transition } = pageTransition;
	let newData: any[] = data;
	const [isPayed, setIsPayed] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useDispatch();
	const {
		user: { uid },
	} = useAuth();
	const subtotal = data?.reduce((acc, item) => {
		return acc + item.price * item.amount;
	}, 0);
	const tax: number = subtotal * 0.1;

	const handlePayment = async () => {
		setIsLoading(true);
		newData = [];
		setIsPayed(true);
		await deleteBuyerProduct(uid);
		dispatch(reset_product());
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={exit}
			transition={transition}
			className="mx-4 sm:mx-10">
			<div className="bg-gray-100/10 flex flex-col gap-5 p-4 sm:p-10 rounded-lg">
				{newData !== undefined && newData.length > 0 && !isPayed ? (
					<>
						<h1 className="font-semibold text-4xl text-center sm:text-left">
							Your Cart
						</h1>

						<div className="rounded-md shadow-md">
							<CheckoutTable products={newData} />
						</div>

						<div
							className={`w-full flex flex-col items-center sm:items-end space-y-4 p-2 text-white font-semibold`}
						>
							<div className={`flex justify-between w-60`}>
								<p>Subtotal</p>
								<p>Rp {makeRupiahValue(subtotal)}</p>
							</div>

							<div className="flex justify-between w-60">
								<p>Fees and Taxes</p>
								<p>Rp {makeRupiahValue(tax)}</p>
							</div>

							<div className="flex justify-between w-60">
								<p>Total</p>
								<p>Rp {makeRupiahValue(subtotal + tax)}</p>
							</div>

							<ModalWrapper
								to="Payment"
								modalType="Payment"
								modalBtnType="Others"
								handlePayment={handlePayment}
							/>
						</div>
					</>
				) : (
					<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10 relative">
						{isLoading ? (
							<LoadingInfo info="Our system is serving payment for your order" />
						) : isPayed ? (
							<>
								<h2>Thank you for buying our dish</h2>
								<p>Enjoy your dish 😁😁😁</p>
							</>
						) : (
							<>
								<h2>No products in your cart</h2>
								<p>Select it first!</p>
							</>
						)}
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default CheckOut;
