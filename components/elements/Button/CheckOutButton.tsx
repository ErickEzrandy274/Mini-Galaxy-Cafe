import React from "react";
import InfoTooltip from "../Tooltip/InfoTooltip";
import { CheckOutModalButtonProps } from "./interface";

const CheckOutButton: React.FC<CheckOutModalButtonProps> = ({
	onClick,
	productList,
}) => {
	const isEmpty = productList === undefined ? true : productList.length === 0;

	return (
		<>
			<label
				htmlFor={isEmpty ? `` : `confirmationModal`}
				onClick={onClick}
				className={`btn modal-button text-lg shadow-xl w-36 text-base-200 text-center ${
					isEmpty
						? `cursor-not-allowed bg-gray-400 hover:bg-gray-400 border-none`
						: `btn-primary hover:text-white`
				}`}
			>
				Check Out
			</label>
			{isEmpty && <InfoTooltip />}
		</>
	);
};

export default CheckOutButton;
