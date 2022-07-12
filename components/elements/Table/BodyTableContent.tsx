import React from "react";
import { makeRupiahValue } from "../../utils/function/function";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { BodyTableContentProps } from "./interface";

const BodyTableContent: React.FC<BodyTableContentProps> = ({ name, type, amount, price, productsLength, index }) => {
	const isLastIndex = index === productsLength - 1;
	const { width } = useWindowSize();
    
	return (
		<tr
			className={`bg-gray-800 border-gray-700 font-semibold shadow-lg ${isLastIndex ? `rounded-b-md` : `border-b`}`}
		>
			<td
				scope="row"
				className={`p-3 break-words sm:px-6 sm:py-4 text-gray-300 tracking-wide ${isLastIndex && `rounded-bl-md`}`}
			>
				{name}
			</td>
			{width >= 640 && (
				<>
					<td className="p-3 sm:px-6 sm:py-4">{type}</td>
					<td className="p-3 sm:px-6 sm:py-4">{amount}</td>
				</>
			)}
			<td className={`p-3 sm:px-6 sm:py-4 ${isLastIndex && `rounded-br-md`}`}>
				Rp {makeRupiahValue(price * amount)}{" "}
				{width < 640 && `(${amount}pcs)`}
			</td>
		</tr>
	);
};

export default BodyTableContent;
