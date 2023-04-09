import React, { useState, useMemo } from "react";
import {
	makeRupiahValue,
	useWindowSize,
	pageTransition,
	removeBuyerProduct,
} from "@utils";
import { IconTrash, ProductCardProps, RESET_NUM } from "@elements";
import { BodyTableContentProps } from "./interface";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteDataBuyer } from "@reduxs";
import { useAuth, useUserStuff } from "@utils";

const BodyTableContent: React.FC<BodyTableContentProps> = ({
	name,
	dataId,
	type,
	image,
	amount,
	price,
	index,
	delay,
	newData,
	setNewData,
}) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = useMemo(
		() => pageTransition,
		[]
	);
	const { setUserStuff } = useUserStuff();
	const dispatch = useDispatch();
	const {
		user: { uid },
	} = useAuth();
	const [isRemoved, setIsRemoved] = useState<boolean>(false);

	const handleDelete = async () => {
		setIsRemoved(true);
		const product: ProductCardProps = {
			name,
			type,
			image,
			price,
			dataId,
			index,
		};
		dispatch(deleteDataBuyer({ ...product, amount: RESET_NUM }));
		setNewData(newData.filter((item) => item.dataId !== dataId));
		await removeBuyerProduct(uid, dataId, setUserStuff);
	};

	return (
		<motion.tr
			initial={initial}
			animate={animate}
			exit={exit}
			transition={{ ...transition, delay: 0.2 + 0.2 * delay }}
			className={`grid grid-cols-2 sm:grid-cols-4 bg-gray-800 border-gray-700 font-semibold shadow-lg border-b px-0 sm:px-5 md:px-10 ${
				isRemoved && `hidden`
			}`}
		>
			<td
				scope="row"
				className="p-3 break-words sm:px-6 sm:py-4 text-gray-300 tracking-wide"
			>
				{name}
			</td>

			{width >= 640 && (
				<>
					<td className="p-3 sm:px-6 sm:py-4">{type}</td>
					<td className="p-3 sm:px-6 sm:py-4">{amount}</td>
				</>
			)}

			<td className="p-3 sm:px-6 sm:py-4">
				<div className="flex justify-around sm:justify-center gap-3 items-center">
					{makeRupiahValue(price * amount)} {width < 640 && `(${amount}pcs)`}
					<IconTrash onClick={handleDelete} />
				</div>
			</td>
		</motion.tr>
	);
};

export default BodyTableContent;
