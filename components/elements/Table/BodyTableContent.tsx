import React from "react";
import { makeRupiahValue, useWindowSize, pageTransition } from "@utils";
import { BodyTableContentProps } from "./interface";
import { motion } from "framer-motion";

const BodyTableContent: React.FC<BodyTableContentProps> = ({
	name,
	type,
	amount,
	price,
	index,
	delay,
}) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = pageTransition;

	return (
		<motion.tr
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ ...transition, delay: 0.2 + 0.2 * delay }}
			className="bg-gray-800 border-gray-700 font-semibold shadow-lg block border-b"
		>
			<td
				scope="row"
				className="p-3 break-words sm:px-6 sm:py-4 w-[30rem] text-gray-300 tracking-wide"
			>
				{name}
			</td>

			{width >= 640 && (
				<>
					<td className="p-3 sm:px-6 sm:py-4 w-1/4">{type}</td>
					<td className="p-3 sm:px-6 sm:py-4 w-1/4">{amount}</td>
				</>
			)}

			<td className="p-3 sm:px-6 sm:py-4 w-1/4">
				{makeRupiahValue(price * amount)} {width < 640 && `(${amount}pcs)`}
			</td>
		</motion.tr>
	);
};

export default BodyTableContent;
