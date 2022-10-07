/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_product, delete_product } from "../../../store/actions/action";
import { ProductCardProps } from "../Card/interface";
import { INITIAL_NUM, RESET_NUM } from "./constants";
import { ModifierButtonProps } from "./interface";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

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
	const product: ProductCardProps = { name, type, image, price, dataId, index }
	let [num, setNum] = useState<number>(amount ? amount : INITIAL_NUM);
	const dispatch = useDispatch();

	const handleNum = (btnType: "increment" | "decrement") => {
		if (btnType === "increment") {
			setNum(++num)
			dispatch(add_product(product, num))
		} else {
			if (num > 1) {
				setNum(--num);
				dispatch(delete_product(product, num))
			} else {
				dispatch(delete_product(product, RESET_NUM))
				setIsModifierButtonOpen(false);
			}
		}
	};

	return (
		<div
			className="flex justify-center p-2.5 px-4 rounded-lg bg-violet-700 
            text-base sm:text-lg shadow-xl gap-3 font-semibold"
		>
			<DecrementButton onClick={() => handleNum("decrement")} />
			<span>{num}</span>
			<IncrementButton onClick={() => handleNum("increment")} />
		</div>
	);
};

export default ModifierButton;
