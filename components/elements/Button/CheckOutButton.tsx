import React from "react";
import InfoTooltip from "../Tooltip/InfoTooltip";
import { CheckOutModalButtonProps } from "./interface";

const ModalButton: React.FC<CheckOutModalButtonProps> = ({
	onClick,
	productList,
	type,
	to,
}) => {
	const isEmpty = to === "Checkout" && productList!.length === 0;
	const htmlFor = to === "Payment" ? `confirmationModal` : isEmpty ? `` : `confirmationModal`

	return (
		<>
			<label
				htmlFor={htmlFor}
				onClick={onClick}
				className={`btn modal-button text-lg shadow-xl w-36 text-base-200 text-center ${
					to === "Checkout" && isEmpty
						? `cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none`
						: `btn-primary hover:text-white`
				}`}
			>
				{to === "Checkout" ? `Check Out` : `Pay`}
			</label>
			{to === "Checkout" && <InfoTooltip type={type} productList={productList!} />}
		</>
	);
};

export default ModalButton;
