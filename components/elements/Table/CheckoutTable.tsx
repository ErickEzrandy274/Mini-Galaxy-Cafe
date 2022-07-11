import { makeRupiahValue } from "../../utils/function/function";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { CheckoutTableProps } from "./interface";

const CheckoutTable: React.FC<CheckoutTableProps> = ({ products }) => {
	const { width } = useWindowSize();

	return (
		<table className="text-sm w-full sm:text-left text-gray-400 text-center">
			<thead className="text-sm uppercase bg-gray-700 text-gray-400">
				<tr>
					<th scope="col" className="p-3 sm:px-6">
						Product name
					</th>
					{width >= 640 &&
						<>
							<th scope="col" className="p-3 sm:px-6">
							Category
							</th>
							<th scope="col" className="p-3 sm:px-6">
								Amount
							</th>
						</>
					}
					<th scope="col" className="p-3 sm:px-6">
						Price
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map(({dataId, name, type, amount, price}) => {
					return (
						<tr key={dataId} className="border-b bg-gray-800 border-gray-700 font-semibold">
							<th scope="row" className="p-3 break-words sm:px-6 sm:py-4 text-gray-300 tracking-wide">
								{name}
							</th>
							{width >= 640 && 
								<>
									<td className="p-3 sm:px-6 sm:py-4">{type}</td>
									<td className="p-3 sm:px-6 sm:py-4">{amount}</td>
								</>
							}
							<td className="p-3 sm:px-6 sm:py-4">Rp {makeRupiahValue(price * amount)} {width < 640 && `(${amount}pcs)`}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
