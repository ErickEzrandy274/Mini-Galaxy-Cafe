import React from "react";
import CheckoutTable from "../../elements/Table/CheckoutTable";
import { makeRupiahValue } from "../../utils/function/function";
import { CheckOutProps } from "./interface";

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
	const subtotal = data?.reduce((acc, item) => {
		return acc + item.price;
	}, 0);
	const tax: number = subtotal * 0.1;

	return (
		<div className="mx-4">
			<div className="bg-gray-100/10 flex-1 p-4 rounded-lg">
				{data ? (
					<>
						<h1 className="font-semibold text-4xl">Your Cart</h1>
						<div className="mt-4 rounded-md overflow-x-auto shadow-md">
							<CheckoutTable products={data} />
						</div>

						<div className="w-full flex flex-col items-end space-y-4 mt-4 p-2 text-white font-semibold">
							<div className="flex justify-between w-60">
								<p>Subtotal</p>
								<p>Rp {makeRupiahValue(subtotal)}</p>
							</div>
							<div className="flex justify-between w-60">
								<p>Fees and Taxes</p>
								<p>Rp {makeRupiahValue(tax)}</p>
							</div>
							<div className="flex justify-between w-60">
								<p>Total</p>
								<p>Rp {makeRupiahValue(subtotal + tax)}</p>
							</div>
							<button className="btn text-base sm:text-md btn-primary shadow-xl text-base-200 w-20 hover:text-white">
								Pay
							</button>
						</div>
					</>
				) : (
					<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10">
						<h2>No products in your cart</h2>
						<p>Select it first!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckOut;
