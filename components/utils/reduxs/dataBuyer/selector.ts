import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useProductListSelector = () =>
	useSelector(({ dataBuyer }: RootState) => {
		return dataBuyer.productList;
	});
