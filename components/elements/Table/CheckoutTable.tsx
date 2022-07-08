export interface Product {
	image: string;
	name: string;
	price: number;
	productId: string;
	quantity: number;
	type: "Foods" | "Beverages" | "Snacks";
}

const CheckoutTable = ({ products }: { products: Product[] }) => {
	return (
		<table className="text-sm w-full text-left text-gray-500 dark:text-gray-400 ">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						Product name
					</th>
					<th scope="col" className="px-6 py-3">
						Category
					</th>
					<th scope="col" className="px-6 py-3">
						Quantity
					</th>
					<th scope="col" className="px-6 py-3">
						Price
					</th>
				</tr>
			</thead>
			<tbody>
				{products?.map((product) => {
					return (
						<tr key={product.productId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
								{product.name}
							</th>
							<td className="px-6 py-4">{product.type}</td>
							<td className="px-6 py-4">{product.quantity}</td>
							<td className="px-6 py-4">Rp{product.price}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CheckoutTable;
