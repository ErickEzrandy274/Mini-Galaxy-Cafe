import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IncrementDecrementProps } from "./interface";

const IncrementButton: React.FC<IncrementDecrementProps> = ({ onClick }) => {
	return (
		<FontAwesomeIcon
			icon={faPlusCircle}
			className="cursor-pointer w-6"
			onClick={onClick}
		/>
	);
};

export default IncrementButton;
