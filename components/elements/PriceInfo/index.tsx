import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { makeRupiahValue, menutitleAnimation } from "@utils";
import { PriceInfoProps } from "./interface";

const PriceInfo: React.FC<PriceInfoProps> = ({ title, data, index }) => {
	const { initial, animate, exit, transition } = menutitleAnimation;
	const subtotal: number = useMemo(() => {
		return data?.reduce((acc, item) => {
			return acc + item.price * item.amount;
		}, 0);
	}, [data]);
	const tax: number = subtotal * 0.1;

	const content: number =
		index === 0 ? subtotal : index === 1 ? tax : subtotal + tax;

	return (
		<motion.section
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{
				...transition,
				delay: 0.2 + 0.2 * (data.length + index),
			}}
			className={`flex justify-between w-[20rem]`}
		>
			<p className="tracking-wide">{title}</p>
			<p className="tracking-widest">{makeRupiahValue(content)}</p>
		</motion.section>
	);
};

export default PriceInfo;
