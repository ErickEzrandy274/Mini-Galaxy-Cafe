import { useWindowSize, menutitleAnimation } from "@utils";
import { CheckoutTableProps } from "./interface";
import { motion } from "framer-motion";
import { BuyerProduct, BodyTableContent } from "@elements";
import { useMemo } from "react";

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
					<motion.th
						initial={initial}
						animate={animate}
						exit={exit}
						transition={{ ...transition, delay: 0.25 }}
						scope="col"
						className="p-3 sm:px-6"
					>
						Product name
					</motion.th>

					{width >= 640 && (
						<>
							<motion.th
								initial={initial}
								animate={animate}
								exit={exit}
								transition={{ ...transition, delay: 0.45 }}
								scope="col"
								className="p-3 sm:px-6"
							>
								Category
							</motion.th>

							<motion.th
								initial={initial}
								animate={animate}
								exit={exit}
								transition={{ ...transition, delay: 0.65 }}
								scope="col"
								className="p-3 sm:px-6"
							>
								Amount
							</motion.th>
						</>
					)}

					<motion.th
						initial={initial}
						animate={animate}
						exit={exit}
						transition={{ ...transition, delay: 0.85 }}
						scope="col"
						className="p-3 sm:px-6 rounded-tr-md"
					>
						Price
					</motion.th>
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
