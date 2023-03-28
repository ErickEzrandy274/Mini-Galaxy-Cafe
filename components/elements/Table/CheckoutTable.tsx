import { useWindowSize, menutitleAnimation } from "@utils";
import { CheckoutTableProps } from "./interface";
import { motion } from "framer-motion";
import { BuyerProduct, BodyTableContent } from "@elements";
import { useMemo } from "react";
import { tableHeader } from "./constant";

const CheckoutTable: React.FC<CheckoutTableProps> = ({
	products,
	newData,
	setNewData,
}) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = useMemo(
		() => menutitleAnimation,
		[]
	);

	return (
		<table
			className={`text-sm sm:text-base text-gray-400 text-center table-fixed ${
				width <= 420 ? "w-80" : "w-full"
			}`}
		>
			<thead className="text-sm sm:text-base uppercase bg-gray-700 text-gray-400 block">
				<motion.tr
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className="grid grid-cols-2 sm:grid-cols-4 px-0 sm:px-5 md:px-10"
				>
					{tableHeader.map(({ name, headerDelay, size }) => {
						return width >= 640 || size === "all" ? (
							<motion.th
								key={name}
								initial={initial}
								animate={animate}
								exit={exit}
								transition={{ ...transition, delay: headerDelay }}
								scope="col"
								className={`p-3 sm:px-6 ${name === "Price" && "rounded-tr-md"}`}
							>
								{name}
							</motion.th>
						) : null;
					})}
				</motion.tr>
			</thead>

			<tbody
				className={
					products.length > 5 ? "h-[20rem] overflow-y-scroll block" : ""
				}
			>
				{products?.map((item: BuyerProduct, idx: number) => {
					return (
						<BodyTableContent
							key={item.dataId}
							{...item}
							delay={idx}
							newData={newData}
							setNewData={setNewData}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
