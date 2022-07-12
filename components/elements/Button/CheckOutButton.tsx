import React from "react";
import InfoTooltip from "../Tooltip/InfoTooltip";
import { CheckOutModalButtonProps } from "./interface";
import { motion } from "framer-motion";
import { buttonCheckOutAnimation } from "../../utils/animation/ProductPageAnimation";

const ModalButton: React.FC<CheckOutModalButtonProps> = ({
	onClick,
	productList,
	modalBtnType,
	to,
}) => {
	const isEmpty = to === "Checkout" && productList!.length === 0;
	const htmlFor = to === "Payment" ? `confirmationModal` : isEmpty ? `` : `confirmationModal`
	const { initial, animate, exit, transition } = buttonCheckOutAnimation;

	return (
		<>
			<motion.label
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				htmlFor={htmlFor}
				onClick={onClick}
				className={`btn modal-button text-lg shadow-xl w-36 text-base-200 text-center ${
					to === "Checkout" && isEmpty
						? `cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none`
						: `btn-primary hover:text-white`
				}`}
			>
				{to === "Checkout" ? `Check Out` : `Pay`}
			</motion.label>
			{to === "Checkout" && <InfoTooltip type={modalBtnType} productList={productList!} />}
		</>
	);
};

export default ModalButton;
