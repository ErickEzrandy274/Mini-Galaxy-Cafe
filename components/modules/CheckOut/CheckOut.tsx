import React from "react";
import CheckoutTable from "../../elements/Table/CheckoutTable";
import { CheckOutProps } from "./interface";

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
	const subtotal = data.reduce((acc, item) => {
		return acc + item.price;
	}, 0);
	const tax: number = subtotal * 0.1;

	return (
		<div className="mx-4">
			<div className="bg-gray-100/10 flex-1 p-4 rounded-lg">
				<h1 className="font-semibold text-4xl">Your Cart</h1>

				<div className="mt-4 rounded-md overflow-x-auto shadow-md">
					<CheckoutTable products={data} />
				</div>

				<div className="w-full flex flex-col items-end space-y-4 mt-4 p-2">
					<div className="flex justify-between w-60">
						<p>Subtotal</p>
						<p>Rp {subtotal}</p>
					</div>
					<div className="flex justify-between w-60">
						<p>Fees and Taxes</p>
						<p>Rp {tax}</p>
					</div>
					<div className="flex justify-between w-60">
						<p>Total</p>
						<p>Rp {subtotal + tax}</p>
					</div>
					<button className="btn text-base sm:text-md btn-primary shadow-xl text-base-200 w-20 hover:text-white">
						Pay
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
