import React from "react";
import { makeRupiahValue } from "../../utils/function/function";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { BuyerProduct } from "../Card/interface";

const BodyTableContent: React.FC<BuyerProduct> = ({ name, type, amount, price }) => {
	const { width } = useWindowSize();
    
	return (
		<tr
			className="border-b bg-gray-800 border-gray-700 font-semibold"
		>
			<th
				scope="row"
				className="p-3 break-words sm:px-6 sm:py-4 text-gray-300 tracking-wide"
			>
				{name}
			</th>
			{width >= 640 && (
				<>
					<td className="p-3 sm:px-6 sm:py-4">{type}</td>
					<td className="p-3 sm:px-6 sm:py-4">{amount}</td>
				</>
			)}
			<td className="p-3 sm:px-6 sm:py-4">
				Rp {makeRupiahValue(price * amount)}{" "}
				{width < 640 && `(${amount}pcs)`}
			</td>
		</tr>
	);
};

export default BodyTableContent;
