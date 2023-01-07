import React from "react";
import { motion } from "framer-motion";
import { buttonCheckOutAnimation } from "@utils";
import {
	IconCheckout,
	IconPayment,
	Tooltip,
	CheckOutModalButtonProps,
} from "@elements";

const ModalButton: React.FC<CheckOutModalButtonProps> = ({
	onClick,
	productList,
	modalBtnType,
	to,
}) => {
	const isCheckOut: boolean = to === "Checkout";
	const isCancelOrder: boolean = to === "Cancel Order";
	const isEmpty = isCheckOut && !productList!.length;
	const htmlFor =
		to === "Payment" ? `confirmationModal` : isEmpty ? `` : `confirmationModal`;
	const { initial, animate, exit, transition } = buttonCheckOutAnimation;
	const newTransition =
		to === "Payment"
			? { ...transition, delay: 0.2 + 0.2 * productList!.length }
			: transition;

	return (
		<>
			<motion.label
				initial={initial}
				animate={animate}
				exit={exit}
				transition={newTransition}
				htmlFor={htmlFor}
				onClick={onClick}
				className={`flex gap-2 btn text-lg shadow-xl transition-all duration-500 ${
					isCancelOrder ? "capitalize btn-outline btn-info" : "text-gray-200"
				} ${
					isCheckOut && isEmpty
						? `cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none`
						: `btn-primary hover:text-white`
				} `}
			>
				{!isCancelOrder && (isCheckOut ? <IconCheckout /> : <IconPayment />)}
				{isCheckOut ? "Check Out" : isCancelOrder ? to : "Pay"}
			</motion.label>

			{isCheckOut && <Tooltip type={modalBtnType} productList={productList!} />}
		</>
	);
};

export default ModalButton;
