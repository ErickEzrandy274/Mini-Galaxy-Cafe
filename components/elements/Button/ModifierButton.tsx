import React, { useState } from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import { ModifierButtonProps } from "./interface";

const ModifierButton: React.FC<ModifierButtonProps> = ({
	setIsModifierButtonOpen,
}) => {
	const [num, setNum] = useState<number>(1);

	const handleDecrement = () => {
		if (num > 1) {
			setNum(num - 1);
		} else {
			setIsModifierButtonOpen(false);
		}
	};

	return (
		<div
			className="flex justify-center p-2.5 px-4 rounded-lg bg-violet-700 
            text-base sm:text-lg shadow-xl gap-3 font-semibold"
		>
			<DecrementButton onClick={handleDecrement} />
			<span>{num}</span>
			<IncrementButton onClick={() => setNum(num + 1)} />
		</div>
	);
};

export default ModifierButton;