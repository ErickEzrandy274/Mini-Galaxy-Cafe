import { useCallback, useMemo } from "react";
import { HandleDecrementProps, HandleIncrementProps } from "./interface";
import { BuyerProduct, ProductCardProps, RESET_NUM } from "@elements";
import { ADD_PRODUCT, DELETE_PRODUCT, handleDataBuyer } from "@reduxs";
import { useDispatch } from "react-redux";

const useHandleNum = (productObj: ProductCardProps) => {
	const rawDispatch = useDispatch();
	const dispatch = useMemo(() => rawDispatch, [rawDispatch]);
	const product = useMemo(() => productObj, [productObj]);

	const handleIncrement = useCallback(
		({ prevNum, setNum }: HandleIncrementProps) => {
			setNum(prevNum + 1);
			const obj: BuyerProduct = { ...product, amount: prevNum + 1 };
			dispatch(handleDataBuyer({ obj, type: ADD_PRODUCT }));
		},
		[dispatch, product]
	);

	const handleDecrement = useCallback(
		({
			prevNum,
			debouncedNum,
			setNum,
			setIsModifierButtonOpen,
		}: HandleDecrementProps) => {
			if (debouncedNum > 1) {
				setNum(prevNum - 1);
				const obj: BuyerProduct = { ...product, amount: prevNum - 1 };
				dispatch(handleDataBuyer({ obj, type: DELETE_PRODUCT }));
			} else {
				const newObj = { ...product, amount: RESET_NUM };
				dispatch(handleDataBuyer({ obj: newObj, type: DELETE_PRODUCT }));
				setIsModifierButtonOpen(false);
			}
		},
		[dispatch, product]
	);

	return {
		handleIncrement,
		handleDecrement,
	};
};

export default useHandleNum;
