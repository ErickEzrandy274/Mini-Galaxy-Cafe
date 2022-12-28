import React from "react";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncrementDecrementProps } from "./interface";

const DecrementButton: React.FC<IncrementDecrementProps> = ({ onClick }) => {
	return (
		<FontAwesomeIcon
			icon={faMinusCircle}
			className="cursor-pointer w-6 hover:opacity-70"
			onClick={onClick}
		/>
	);
};

export default DecrementButton;
