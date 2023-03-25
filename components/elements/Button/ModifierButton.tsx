import React, { useState } from "react";
import { INITIAL_NUM, IconMinus, IconPlus } from "@elements";
import { ModifierButtonProps } from "./interface";
import { useDebounce, useHandleNum } from "@utils";

const ModifierButton: React.FC<ModifierButtonProps> = ({
	setIsModifierButtonOpen,
	type,
	name,
	image,
	index,
	price,
	dataId,
	amount,
}) => {
	const [num, setNum] = useState<number>(amount ? amount : INITIAL_NUM);
	const debouncedNum = useDebounce(num, 200);
	const { handleIncrement, handleDecrement } = useHandleNum({
		name,
		type,
		image,
		price,
		dataId,
		index,
	});

	const handleIncrementParams = {
		prevNum: num,
		setNum,
	};

	const handleDecrementParams = {
		...handleIncrementParams,
		debouncedNum,
		setIsModifierButtonOpen,
	};

	return (
		<section
			className="flex justify-center items-center p-2.5 px-4 rounded-lg bg-violet-700 
            text-base sm:text-lg shadow-xl gap-3 font-semibold"
		>
			<IconMinus onClick={() => handleDecrement(handleDecrementParams)} />
			<span>{num}</span>
			<IconPlus onClick={() => handleIncrement(handleIncrementParams)} />
		</section>
	);
};

export default ModifierButton;
