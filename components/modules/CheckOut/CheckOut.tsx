import React from "react";
import Button from "../../elements/Button/Button";
import CheckoutTable, { Product } from "../../elements/Table/CheckoutTable";

const products: Product[] = [
	{
		image: "gs:/mini-galaxy-cafe.appspot.com/Foods/Lasagna.jpg",
		name: "Lasagna",
		price: 45000,
		productId: "312432j423ijij",
		quantity: 1,
		type: "Foods",
	},
	{
		image: "gs:/mini-galaxy-cafe.appspot.com/Foods/Lasagna.jpg",
		name: "Lasagna",
		price: 25000,
		productId: "312dsadvvfdj",
		quantity: 3,
		type: "Foods",
	},
];

const CheckOut = () => {
	return (
		<div className="mx-4 rounded-lg ">
			<div className="bg-gray-100/10 flex-1 p-4">
				<h1 className="font-semibold text-xl">Your Cart</h1>

				<div className="mt-4 rounded-md overflow-x-auto shadow-md">
					<CheckoutTable products={products} />
				</div>

				<div className="w-full flex flex-col items-end space-y-4 mt-4 p-2">
					<div className="flex justify-between w-60">
						<p>Subtotal</p>
						<p>Rp50.000</p>
					</div>
					<div className="flex justify-between w-60">
						<p>Fees and Taxes</p>
						<p>Rp10.000</p>
					</div>
					<div className="flex justify-between w-60">
						<p>Total</p>
						<p>Rp60.000</p>
					</div>
					<button className="btn text-base sm:text-md btn-primary shadow-xl text-base-200 hover:text-white">
						Pay Rp60.000
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
