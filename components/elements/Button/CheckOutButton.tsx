import React from "react";
import { CheckOutModalButtonProps } from "./interface";

const CheckOutButton: React.FC<CheckOutModalButtonProps> = ({ onClick }) => {
	return (
		<label
			htmlFor="confirmationModal"
			onClick={onClick}
			className="btn modal-button btn-primary text-lg shadow-xl w-36 text-base-200"
		>
			Check Out
		</label>
	);
};

export default CheckOutButton;
