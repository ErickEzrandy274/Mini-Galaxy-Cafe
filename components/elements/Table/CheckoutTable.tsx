import { menutitleAnimation } from "../../utils/animation/MenuPageAnimation";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { BuyerProduct } from "../Card/interface";
import BodyTableContent from "./BodyTableContent";
import { CheckoutTableProps } from "./interface";
import { motion } from "framer-motion";

const CheckoutTable: React.FC<CheckoutTableProps> = ({ products }) => {
	const { width } = useWindowSize();
	const { initial, animate, exit, transition } = menutitleAnimation;

	return (
		<table className="text-sm sm:text-base w-full text-gray-400 text-center">
			<thead className="text-sm sm:text-base uppercase bg-gray-700 text-gray-400">
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
						className="p-3 sm:px-6 rounded-tl-md"
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

			<tbody>
				{products.map((item: BuyerProduct, idx: number) => {
					return (
						<BodyTableContent
							key={item.dataId}
							{...item}
							productsLength={products.length}
							delay={idx}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
