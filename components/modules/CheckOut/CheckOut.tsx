import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import ModalButton from "../../elements/Button/CheckOutButton";
import CheckOutModal from "../../elements/Modal/CheckOutModal";
import CheckoutTable from "../../elements/Table/CheckoutTable";
import { deleteBuyerProduct } from "../../utils/function/dataManipulation";
import { makeRupiahValue } from "../../utils/function/function";
import { CheckOutProps } from "./interface";

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
	let newData: any[] = data;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isPayed, setIsPayed] = useState<boolean>(false);
	const {
		user: { uid },
	} = useAuth();
	const subtotal = data?.reduce((acc, item) => {
		return acc + item.price * item.amount;
	}, 0);
	const tax: number = subtotal * 0.1;

	const handlePayment = async () => {
		console.log("PAY")
		newData = [];
		setIsPayed(true);
		await deleteBuyerProduct(uid);
		setIsModalOpen(false)
	};

	return (
		<div className="mx-4">
			<div className="bg-gray-100/10 flex-1 p-4 rounded-lg">
				{newData !== undefined && newData.length > 0 && !isPayed ? (
					<>
						<h1 className="font-semibold text-4xl">Your Cart</h1>

						<div className="mt-4 rounded-md overflow-x-auto shadow-md">
							<CheckoutTable products={newData} />
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

							<div className="flex flex-col justify-center items-center md:items-center">
								<div>
									<ModalButton
										to="Payment"
										onClick={() => setIsModalOpen(true)}
									/>
								</div>

								{isModalOpen && (
									<CheckOutModal
										type="Payment"
										setIsModalOpen={setIsModalOpen}
										handlePayment={handlePayment}
									/>
								)}
							</div>
						</div>
					</>
				) : (
					<div className="flex flex-col gap-5 text-center text-4xl sm:text-5xl lg:text-6xl text-gray-300 my-10">
						{isPayed ? (
							<>
								<h2>Thank you for buying our dish</h2>
								<p>Enjoy your dish 😁😁😁</p>
							</>
						) : (
							<>
								<h2>No products in your cart</h2>
								<p>Select it first!</p>
							</>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckOut;
