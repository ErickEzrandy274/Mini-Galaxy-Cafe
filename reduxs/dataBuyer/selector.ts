import { useSelector } from "react-redux";
import { RootState } from "reduxs/store";

export const useProductListSelector = () =>
	useSelector(({ dataBuyer }: RootState) => {
		return dataBuyer.productList;
	});
