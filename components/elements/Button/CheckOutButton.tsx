import React from "react";
import { CheckOutModalButtonProps } from "./interface";

const CheckOutButton: React.FC<CheckOutModalButtonProps> = ({ onClick }) => {
    
	return (
        <label
            htmlFor="confirmationModal"
            onClick={onClick}
            className="btn modal-button tracking-wider btn-primary shadow-xl w-20"
		>
			Check<br/> Out
        </label>
	);
};

export default CheckOutButton;
