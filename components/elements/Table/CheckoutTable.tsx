import { useWindowSize } from "../../utils/function/useWindowSize";
import { BuyerProduct } from "../Card/interface";
import BodyTableContent from "./BodyTableContent";
import { CheckoutTableProps } from "./interface";

const CheckoutTable: React.FC<CheckoutTableProps> = ({ products }) => {
	const { width } = useWindowSize();

	return (
		<table className="text-sm w-full text-gray-400 text-center">
			<thead className="text-sm uppercase bg-gray-700 text-gray-400">
				<tr>
					<th scope="col" className="p-3 sm:px-6 rounded-tl-md">
						Product name
					</th>

					{width >= 640 && (
						<>
							<th scope="col" className="p-3 sm:px-6">
								Category
							</th>
							<th scope="col" className="p-3 sm:px-6">
								Amount
							</th>
						</>
					)}

					<th scope="col" className="p-3 sm:px-6 rounded-tr-md">
						Price
					</th>
				</tr>
			</thead>

			<tbody>
				{products.map((item: BuyerProduct) => {
					return (
						<BodyTableContent
							key={item.dataId}
							{...item}
							productsLength={products.length}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
