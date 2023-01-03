import { useWindowSize, menutitleAnimation } from "@utils";
import { CheckoutTableProps } from "./interface";
import { motion } from "framer-motion";
import { BuyerProduct, BodyTableContent } from "@elements";

const CheckoutTable: React.FC<CheckoutTableProps> = ({ products }) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = menutitleAnimation;

	return (
		<table className="text-sm sm:text-base w-full text-gray-400 text-center table-fixed">
			<thead className="text-sm sm:text-base uppercase bg-gray-700 text-gray-400 block">
				<motion.tr
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
				>
					<motion.th
						initial={initial}
						animate={animate}
						exit={exit}
						transition={{ ...transition, delay: 0.25 }}
						scope="col"
						className="p-3 sm:px-6 w-1/2 sm:w-[30rem]"
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
								className="p-3 sm:px-6 w-1/4"
							>
								Category
							</motion.th>

							<motion.th
								initial={initial}
								animate={animate}
								exit={exit}
								transition={{ ...transition, delay: 0.65 }}
								scope="col"
								className="p-3 sm:px-6 w-1/4"
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
						className="p-3 sm:px-6 w-1/2 sm:w-1/4 rounded-tr-md"
					>
						Price
					</motion.th>
				</motion.tr>
			</thead>

			<tbody
				className={
					products.length > 5 ? "h-[20rem] overflow-y-scroll block" : "h-auto"
				}
			>
				{products.map((item: BuyerProduct, idx: number) => {
					return <BodyTableContent key={item.dataId} {...item} delay={idx} />;
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
