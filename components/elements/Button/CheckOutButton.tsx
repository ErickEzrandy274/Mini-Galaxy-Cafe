import React from "react";
import { CheckOutModalButtonProps } from "./interface";

const CheckOutButton: React.FC<CheckOutModalButtonProps> = ({ onClick }) => {
    
	return (
        <label
            htmlFor="confirmationModal"
            onClick={onClick}
            className="btn modal-button btn-primary shadow-xl w-[8rem]"
		>
			Check Out
        </label>
	);
};

export default CheckOutButton;
