import React from "react";
import { makeRupiahValue } from "../../utils/function/function";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { BodyTableContentProps } from "./interface";
import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animation/PageTransitionAnimation";

const BodyTableContent: React.FC<BodyTableContentProps> = ({ name, type, amount, price, productsLength, index, delay }) => {
	const isLastIndex = delay === productsLength - 1;
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = pageTransition;
    
	return (
		<motion.tr
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ ...transition, delay: 0.2 + 0.2 * delay }}
			className={`bg-gray-800 border-gray-700 font-semibold shadow-lg ${isLastIndex ? `rounded-b-md` : `border-b`}`} >
			
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
			
		</motion.tr>
	);
};

export default BodyTableContent;
