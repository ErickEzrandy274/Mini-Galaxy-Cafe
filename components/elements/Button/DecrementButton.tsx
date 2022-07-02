import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IncrementDecrementProps } from "./interface";

const DecrementButton: React.FC<IncrementDecrementProps> = ({ onClick }) => {
	return (
		<FontAwesomeIcon
			icon={faMinusCircle}
			className="cursor-pointer w-6"
			onClick={onClick}
		/>
	);
};

export default DecrementButton;
