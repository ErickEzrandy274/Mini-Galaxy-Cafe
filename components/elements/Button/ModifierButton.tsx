/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	INITIAL_NUM,
	RESET_NUM,
	BuyerProduct,
	ProductCardProps,
	IconMinus,
	IconPlus,
} from "@elements";
import { ModifierButtonProps } from "./interface";
import { handleDataBuyer, ADD_PRODUCT, DELETE_PRODUCT } from "@reduxs";

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
	const product: ProductCardProps = { name, type, image, price, dataId, index };
	let [num, setNum] = useState<number>(amount ? amount : INITIAL_NUM);
	const dispatch = useDispatch();

	const handleNum = (btnType: "increment" | "decrement") => {
		if (btnType === "increment") {
			setNum(++num);
			const obj: BuyerProduct = { ...product, amount: num };
			dispatch(handleDataBuyer({ obj, type: ADD_PRODUCT }));
		} else {
			if (num > 1) {
				setNum(--num);
				const obj: BuyerProduct = { ...product, amount: num };
				dispatch(handleDataBuyer({ obj, type: DELETE_PRODUCT }));
			} else {
				const newObj = { ...product, amount: RESET_NUM };
				dispatch(handleDataBuyer({ obj: newObj, type: DELETE_PRODUCT }));
				setIsModifierButtonOpen(false);
			}
		}
	};

	return (
		<section
			className="flex justify-center items-center p-2.5 px-4 rounded-lg bg-violet-700 
            text-base sm:text-lg shadow-xl gap-3 font-semibold"
		>
			<IconMinus onClick={() => handleNum("decrement")} />
			<span>{num}</span>
			<IconPlus onClick={() => handleNum("increment")} />
		</section>
	);
};

export default ModifierButton;
