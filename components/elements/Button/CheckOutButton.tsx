import React from "react";
import { CheckOutModalButtonProps } from "./interface";
import { motion } from "framer-motion";
import { buttonCheckOutAnimation } from "../../utils/animation";
import InfoTooltip from "../Tooltip";

const ModalButton: React.FC<CheckOutModalButtonProps> = ({
	onClick,
	productList,
	modalBtnType,
	to,
}) => {
	const isCheckOut: boolean = to === "Checkout";
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
				className={`btn modal-button text-lg shadow-xl w-36 text-base-200 text-center ${
					isCheckOut && isEmpty
						? `cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none`
						: `btn-primary hover:text-white`
				}`}
			>
				{isCheckOut ? `Check Out` : `Pay`}
			</motion.label>

			{isCheckOut && (
				<InfoTooltip type={modalBtnType} productList={productList!} />
			)}
		</>
	);
};

export default ModalButton;
