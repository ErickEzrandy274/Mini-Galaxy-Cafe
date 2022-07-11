import { makeRupiahValue } from "../../utils/function/function";
import { CheckoutTableProps } from "./interface";

const CheckoutTable: React.FC<CheckoutTableProps> = ({ products }) => {
	return (
		<table className="text-sm w-full text-left text-gray-500 dark:text-gray-400 ">
			<thead className="text-sm uppercase bg-gray-700 text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						Product name
					</th>
					<th scope="col" className="px-6 py-3">
						Category
					</th>
					<th scope="col" className="px-6 py-3">
						Amount
					</th>
					<th scope="col" className="px-6 py-3">
						Price
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map(({dataId, name, type, amount, price}) => {
					return (
						<tr key={dataId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-4 font-semibold text-gray-300 tracking-wide whitespace-nowrap">
								{name}
							</th>
							<td className="px-6 py-4">{type}</td>
							<td className="px-6 py-4">{amount}</td>
							<td className="px-6 py-4">Rp {makeRupiahValue(price*amount)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
