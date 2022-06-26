import React from "react";
import { CheckoutModalProps } from "./interface";

const CheckOutModal: React.FC<CheckoutModalProps> = ({ setIsModalOpen }) => {
	const handleOrder = () => {
		// TODO: implement store to database
	};

	return (
		<>
			<input
				type="checkbox"
				id="confirmationModal"
				className="modal-toggle"
			/>

			<div className="modal">
				<div className="modal-box flex flex-col gap-4">
					<h3 className="font-bold text-lg uppercase">
						Checkout Confirmation
					</h3>
					<p>
						Please check again the number of products that you wanna
						buy because it won&apos;t be able to change after you
						click the Order button
					</p>

					<p className="text-base">
						Are you sure wanna order that product?
					</p>
					<div className="modal-action">
						<div
							onClick={() => setIsModalOpen(false)}
							className="btn btn-outline btn-secondary"
						>
							Cancel
						</div>
						<div
							onClick={handleOrder}
							className="btn btn-outline btn-primary"
						>
							Order
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckOutModal;
